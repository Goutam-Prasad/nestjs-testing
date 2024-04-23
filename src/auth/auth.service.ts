import { Injectable } from "@nestjs/common";

/**
 * Dependecy injection are used in service because if we dont use it we have to create the instance
 * of this service wherever it is used like const service = new AuthService();
 */
@Injectable({})
export class AuthService{
    //this is a function
    // we will have two function login and signup
    signUp(){
        // return 'I am signUp'//Nest js automalically converts the response content type in this case it would be text/html
        return {msg:'I have signed up'}//and in this case it would be application/json
    }
    signIn(){
        return {msg:'I have signed up'}
    }

}