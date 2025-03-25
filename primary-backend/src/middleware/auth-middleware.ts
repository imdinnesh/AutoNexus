import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from '../config';
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token=req.headers.authorization;
    if(!token){
        res.status(401).json({message:"Unauthorized"})
        return;
    }

    try{
        
        const decoded=jwt.verify(token,JWT_PASSWORD)
        //@ts-ignore
        req.id=(decoded as any).id;
        next();

    }
    catch(err){
        res.status(401).json({message:"Unauthorized. Please login again"})
        return;
    }
}

