import { type Request, type Response } from "express";

interface usersType{
    name:string,
    age:number,
    Education:string,
}

const getUsers = (req: Request, res: Response) => {
    res.json({
        "name":"waqar",
        "age":12,
        "Education":"Aspire college school",
    } as usersType);
}

export  {getUsers};