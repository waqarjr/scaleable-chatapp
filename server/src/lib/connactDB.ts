import mongoose from "mongoose";

const connactDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION as string);
        console.log("Database connected successfully");
    } catch (error:any) {
        console.log("Error connecting to database", error.name);
        process.exit(1);
    }
}

export default connactDB;