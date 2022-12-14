import mongoose from "mongoose";
import {createHmac} from 'crypto';
const userSchema  = mongoose.Schema({
    name:{
        type:String,require:true,minlength:5,maxlength:32,
    },
    password:{
        type:String,require:true,minlength:5,
    }
},{timestamps:true})

userSchema.methods = {
    authenticate(password){
        return this.password === this.encrytPassword(password);
    },
    encrytPassword:(password)=>{
        if(!password) return;
        try {
           return createHmac('sha256','abc').update(password).digest('hex');
        } catch (error) {
            console.log(error)
        }
    }
};
userSchema.pre('save',function(next){
    this.password = this.encrytPassword(this.password);
    next()
})
export default mongoose.model('user',userSchema);