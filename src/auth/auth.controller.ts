import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

/**
 * Controller calls the service but to do so an instance of that service has to be 
 * created all the buisness logic are there in services 
 * we use dependency injection because if we dont we would have to declare it inside the constructor of the contoller 
 */

@Controller('auth')//if we dont add anything here then we will call the endpoint for signup as /signUp  now it will be called
//as auth/signUp
export class AuthController{

    //this is without dependency injection
    // constructor(){
    //     const service=new AuthService();
    // }

    //we use private here because if we dont then we have to do like this.authservice=authserive just like in java
    //so to avaoid this we use private
    // constructor(authservice:AuthService){
    // this.authservice=authservice;
    // }
    constructor(private authservice:AuthService){}
        
    @Post('signup')
    signUp(){
        return this.authservice.signUp();
    }

    signIn(){
        return this.authservice.signIn();
    }
    }
