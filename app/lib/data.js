import { Product, User } from "./model";
import { connectDB } from "./utils";

export const fetchUser = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEMS_PER_PAGE = 2;

  try {
    await connectDB();
    const userslength = (await User.find({ username: { $regex: regex } }))
      .length;
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return [users, userslength];
  } catch (err) {
    console.log(err);
  }
};

export const fetchProduct = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEMS_PER_PAGE = 2;

  try {
    await connectDB();
    const productlength = (await Product.find({ title: { $regex: regex } }))
      .length;
    const product = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    console.log(product, productlength);
    return [product, productlength];
  } catch (err) {
    console.log(err);
  }
};
