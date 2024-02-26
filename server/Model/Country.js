import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    name:{type:String, require:true},
});
const CountryModel = mongoose.model("country",countrySchema);
export default CountryModel;