import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id, email } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id, email }).select({_id,email});
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export default requireAuth;
