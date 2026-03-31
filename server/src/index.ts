import express, { type Request, type Response } from "express";

const app = express();

interface usersType{
    name:string,
    age:number,
    Education:string,
}

app.get("/users", (_req: Request, res: Response) => {
    res.json({
        "name":"waqar",
        "age":12,
        "Education":"Aspire college school",
    } as usersType);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});