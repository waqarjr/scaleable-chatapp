import { type Request, type Response, type NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware");
    next();
}

export default middleware;