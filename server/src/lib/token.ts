import jwt from 'jsonwebtoken';
import { Response } from 'express';

const tokanize = (user_id : string , res:Response)=>{
    try{
        const token = jwt.sign({user_id}, process.env.JWT_SECRET as string, 
        {
            expiresIn: '7d'
         });
        res.cookie("token", token,{
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true, // prevent XXS attacks cross-site scripting attacks
            sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
            secure: process.env.NODE_ENV === 'production' // use secure cookies in production
        }) 
        return token;
    } catch(err :any ){
        const message = err instanceof Error ? err.message : "Internal server error";
        console.error("Error generating token:", message);
        return null;
    }
}

export default tokanize;
