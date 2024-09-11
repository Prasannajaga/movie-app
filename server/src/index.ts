
import express, { Express, Request, Response } from "express"; 
import { homeRoutes } from "./routes/home";
import { employeeRoutes } from "./routes/employee";
import { loggingInterceptor } from "./interceptor/interceptor";
import { authInterceptor } from "./interceptor/authInterceptor";
 
const app : Express = express(); 

app.use(express.json());

// INTERCEPTOR 
app.use(loggingInterceptor);
app.use(authInterceptor);


// CONTROLLERS
app.use('/home' , homeRoutes);
app.use('/employee' , employeeRoutes);
 
app.listen(8000 , () =>{ 
});