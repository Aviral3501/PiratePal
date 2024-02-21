//here we will geneate a jwt token and set cookie
import jwt from "jsonwebtoken";
const JWT_SECRET = "U/04yQEQGJvcgJi1wViJm+2FAs+ALKZLtQSlntRWxSk=";//secret key used to generate the token
let NODE_ENV ="development";//for security

const generateTokenAndSetCookie = (userId,res)=>{
    const token =jwt.sign({userId},JWT_SECRET,{
        expiresIn: '15d'
    })
    //it will expire in 15 days
    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 12 *60 *60* 1000,//milliseconds ie 15 days
        httpOnly:true,//prevent XSS attacks cross site scripting attacks //prevents the user to acces the data using js  on browser
        sameSite:"strict",//CSRF attacks cross site requests forgery attacks
        secure: NODE_ENV === "production" ? true : false ,
    });
}

export  default generateTokenAndSetCookie  ;

