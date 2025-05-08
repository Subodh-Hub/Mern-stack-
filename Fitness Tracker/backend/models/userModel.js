import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { signupSchema,loginSchema } from "../validations/userSchema.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Static signup method
userSchema.statics.signup = async function (
  firstName,
  middleName,
  lastName,
  email,
  password
) {
  // Validation
  try {
    signupSchema.parse({ firstName, middleName, lastName, email, password });
  } catch (error) {
    // Convert Zod errors to a plain error message
    const message = error.errors?.map((e) => e.message).join(", ") || "Invalid input";
    throw new Error(message);
  }

  // Check if email is already in use

  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email already in use");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    middleName,
    lastName,
    email,
    password: hash,
  });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
    try{
        loginSchema.parse({email,password});
    }
    catch(error){
        const message = error.errors?.map((e) => e.message).join(", ") || "Invalid input";
        throw new Error(message);
    }
    const user = await this.findOne({ email });
    if (!user) {
      throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }
    return user;
}

const User = mongoose.model("User", userSchema);
export default User;
