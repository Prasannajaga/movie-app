
import { Request, Response, NextFunction } from "express"; 


export const loggingInterceptor = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
     
    const originalSend = res.send;
   
    res.send = function (body?: any): Response {  
      return originalSend.call(this, body);
    };
  
    next();
};
  
