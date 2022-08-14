import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:{
        type:String,require:true,minlength:5,maxlength:32,
    },
    img:{
        type:String,require:true
    },
    price:{
        type:Number,require:true
    },
    description:{
        type:String
    }
},{timestamps:true})

export default mongoose.model('Book',bookSchema);