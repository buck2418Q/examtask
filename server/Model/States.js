import mongoose from "mongoose";

const stateSchmea = new mongoose.Schema({
    name:{type:String,require:true},
    country:{type:mongoose.Schema.Types.ObjectId,ref:"country"},
});
const StateModel = mongoose.model("states",stateSchmea);
export default StateModel;