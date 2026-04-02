import { type Request, type Response } from "express";
import Register from "../modules/register.modules";
import tokanize from "../lib/token";
import bcrypt from "bcrypt";

interface IUser {
    name: string;
    email: string;
}

interface RegisterResponse {
    status: "success" | "error";
    message: string;
    data: IUser | null;
}

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body as Partial<RegisterRequest>;

        if (!name || !email || !password) {
            res.status(400).json({ status: "error", message: "Missing required fields", data: null } as RegisterResponse);
            return;
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = await Register.create({ name, email, password:hashPassword });
        
        tokanize(user._id.toString(), res);

        res.status(201).json({ status: "success", message: "User registered successfully", data: user } as RegisterResponse);

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        res.status(500).json({ status: "error", message, data: null } as RegisterResponse);
    }
};

// login 

interface loginRequest{
    email:string,
    password:string,
}
interface loginResponse{
    status: "success" | "error";
    message: string;
    data: IUser | null;
}

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body as Partial<loginRequest>;

        if (!email || !password) {
            res.status(400).json({ status: "error", message: "Missing required fields", data: null } as loginResponse);
            return;
        }
        const user = await Register.findOne({ email });
        if (!user) {
            res.status(404).json({ status: "error", message: "User not found", data: null } as loginResponse);
            return;
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ status: "error", message: "Invalid password", data: null } as loginResponse);
            return;
        }
        tokanize(user._id.toString(), res);
        res.status(200).json({ status: "success", message: "User logged in successfully", data: user } as loginResponse);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        res.status(500).json({ status: "error", message, data: null } as loginResponse);
    }
};


const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie("token");
        res.status(200).json({ status: "success", message: "User logged out successfully", data: null } as loginResponse);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        res.status(500).json({ status: "error", message, data: null } as loginResponse);
    }
};

export { register, login, logout };