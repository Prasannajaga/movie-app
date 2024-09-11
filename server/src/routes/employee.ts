import { Router, Request, Response } from "express";
 
export const employeeRoutes = Router();


employeeRoutes.get('/:userId' , (req , res)=>{ 
    console.log('Hello there');
    res.send("Hey it's Prasanna here")
});
 

