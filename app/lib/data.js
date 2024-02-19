import { User } from "./model";
import { connectDB } from "./utils";

export const fetchUser = async (query) => {
  console.log(query);
  const regex = new RegExp(query, "i");
  try {
    await connectDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.log(err);
  }
};
