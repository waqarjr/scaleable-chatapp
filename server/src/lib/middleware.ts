import { type Request, type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import Register from "../modules/register.modules";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

interface DecodedToken extends JwtPayload {
  user_id: string;
}

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(401).json({status:"error", message: "Unauthorized access", data: null });
      return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not defined in environment variables");
      res.status(500).json({status:"error", message: "Internal server error", data: null });
      return;
    }

    // jwt.verify throws on invalid/expired token — no need to check the return value
    const decoded = jwt.verify(token, secret) as DecodedToken;

    if (!decoded.user_id) {
      res.status(401).json({ status:"error",message: "Invalid token payload", data: null });
      return;
    }

    const user = await Register.findById(decoded.user_id);
    if (!user) {
      res.status(404).json({ status:"error", message: "User not found", data: null });
      return;
    }

    req.user = user;
    next();
  } catch (err: unknown) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ status:"error", message: "Token expired", data: null });
      return;
    }
    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ status:"error", message: "Invalid token", data: null });
      return;
    }

    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Error in auth middleware:", message);
    res.status(500).json({ status:"error", message: "Internal server error", data: null });
  }
};

export default middleware;