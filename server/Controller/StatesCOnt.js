
import StateModel from "../Model/States.js"

export const CreateStates = async (req,res)=>{
    try {
        const data = StateModel.create({
            name:req.body.name,
            country:req.body.countryId,
        })
        if(data) res.status(201).send({message:"sate created"});
        else res.status().send({message:"unable to create"});
        
    } catch (error) {
        res.status().send({e : error?.message})
        
    }
};
export const GetState = async (req, res) => {
    try {
        const StateData = await StateModel.find(
            {
                country: req.body.countryId
            }
        ).populate('country');
        res.status(200).send({ StateData });
    } catch (e) {
        res.status(404).send({ error: e?.message })

    }
};
