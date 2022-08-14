import bookModel from "../models/book.model";
export const list = async(req,res) =>{
   try {
    const data = await bookModel.find().exec();
    res.json(data)
   } catch (error) {
    res.status(400).json({
        error: 'ko timt thay'
    })
   }
}
export const listlimit20 = async(req,res) =>{
    try {
        const data = await bookModel.find().limit(3).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error:'ko timt thay'
        })
    }
}
export const add = async(req,res)=>{
    try {
        const data = await new bookModel(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error:'ko timt thay'
        })
    }
}
export const sortbycreatat = async(req,res)=>{
    try {
        const data = await bookModel.find().sort({sortbycreatat:'asc'})
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error:'ko timt thay'
        })
    }
}
export const update = async(req,res)=>{
    try {
        const data = await bookModel.findOneAndUpdate({_id : req.params.id},req.body,{
            new :true,
        })
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error:'chua update dc'
        })
    }
}
export const remove = async(req,res)=>{
    try {
        const data = await bookModel.findOneAndDelete({_id : req.params.id})
        res.json('xoa thanh cong' + data.name)
    } catch (error) {
        res.status(400).json({
            error:'chua update dc'
        })
    }
}