import usersModel from "../models/users.model";
import jsonwebtoken from "jsonwebtoken";
export const signup = async (req,res)=>{
 try {
   const isName = await usersModel.findOne({name: req.body.name}).exec();
    if(isName){
         res.status(401).json({
            message:'name da ton tai'
        })
    }else{
        const user = await new usersModel(req.body).save();
        return res.status(200).json({
            user:{
                name:user.name,
                password:user.password
            }
        });
    }
    } catch (error) {
        return res.status(400).json({
            message: "Dang ky khong thanh cong",
            error,
        });
    }
}
export const signin = async (req,res)=>{
    try {
        const user = await usersModel.findOne({name: req.body.name}).exec();
        if(!user){
            return res.status(400).json({
                message:'tai khoan ko ton tai'
            })
        }
        if(!user.authenticate(req.body.password)){
            return res.status(500).json({
                message:'sai mat khau'
            })
        }
        const token = jsonwebtoken.sign({id : user._id,},'123456',)
        return res.status(200).json({
            token,
            user:{
               
                id : user._id,
                name : user.name
            }
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}