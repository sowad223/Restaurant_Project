import mongoose from "mongoose";


const MenuItemSchema = mongoose.Schema({
    title:{ type:String,required:true },
    price:{ type:Number,required:true },
    subcategory:{ type:mongoose.Schema.Types.ObjectId, ref:"Subcategory", required:true},
    description:{ type:String,required:true},
    image: { type: String, required: true }, // Store URL or path to image    
},{
    timestamps:true,
})


export const MenuItem = mongoose.model('MenuItem',MenuItemSchema)

