import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import connactDB from "./lib/connactDB";
import usersRouters from "./routers/users.routers";
import authRouters from "./routers/auth.routers";

const app = express();
dotenv.config();

app.use(express.json());

connactDB();

const port  = Number(process.env.PORT);

app.use("/api", usersRouters);
app.use("/api/auth", authRouters);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});