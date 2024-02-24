"use server";
import { redirect } from "next/navigation";
import { Product, User } from "./model";
import { connectDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    connectDB();
    const newuser = new User({
      username,
      email,
      password: hashedPassword,
      salt,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newuser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (userId) => {
  const { id } = Object.fromEntries(userId);

  try {
    connectDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (productId) => {
  const { id } = Object.fromEntries(productId);

  try {
    connectDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the product");
  }

  revalidatePath("/dashboard/products");
};
