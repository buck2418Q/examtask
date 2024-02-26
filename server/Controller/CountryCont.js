import CountryModel from "../Model/Country.js";



export const CreateCountry = async (req,res)=>{
    try {
        const data = CountryModel.create({
            name:req.body.name,
        })
        if(data) res.status(201).send({message:"cont created"});
        else res.status().send({message:"unable to create"});
        
    } catch (error) {
        res.status().send({e : error?.message})
        
    }
};
export const GetCountry = async (req, res) => {
    try {
        const CountryData = await CountryModel.find(
            {
                Country: req.body.countryId
            }
        );
        res.status(200).send({ CountryData });
    } catch (e) {
        res.status(404).send({ error: e?.message })

    }
};
