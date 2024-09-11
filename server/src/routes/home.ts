import { Router , Request, Response } from "express"; 

export const homeRoutes = Router();

   
homeRoutes.get('/login' , (req , res)=>{ 
    res.send("Hey it's login page");
}); 


homeRoutes.get('/getToken' , (req , res)=>{ 
    res.send(String(Math.random()));
});

