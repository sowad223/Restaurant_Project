import mongoose from "mongoose";

const SubcategorySchema = mongoose.Schema({
    title:{   type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
},{
    timestamps:true,
})


export const Subcategory = mongoose.model('Subcategory',SubcategorySchema)