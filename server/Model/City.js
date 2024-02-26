import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name:{type:String,require:true},
    states:{type:mongoose.Schema.Types.ObjectId,ref:"states"},
});
const CityModel = mongoose.model("city",citySchema);
export default CityModel;