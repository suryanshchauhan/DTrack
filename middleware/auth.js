import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

UnAuthenticatedError;
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // TEST USER
    const testUser = payload.userId === "6458b7abbdd101c340d79eb2";
    req.user = { userId: payload.userId, testUser };
    // TEST USER
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export default auth;
