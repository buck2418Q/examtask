import mongoose, { mongo } from "mongoose"

const registerSchema = new mongoose.Schema({
    city:{type:mongoose.Schema.Types.ObjectId,ref:"city"},
});
const registerModel = mongoose.model("register",registerSchema);
export default registerModel;