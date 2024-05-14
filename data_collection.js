const express = require('express');
const db = require('./dbConnection');



const router = express.Router();


//



//Homepage data colelction
router.post('/collectdata',async (req,res)=>{
    try{
        
     const {session_id,age_group,ethnicity,custom_ethnicity,gender,custom_gender,country,education,marital_status,
        employment, income,household_size,home_ownership,bestfriend,
        authority_figure,environmental_choice,medication_ack,vision_ack} = req.body;
        if(!session_id || !age_group || !ethnicity || !custom_ethnicity || !gender || !custom_gender || !country || !education || !marital_status
            || !employment || !income || !household_size || !home_ownership || !bestfriend
            || !authority_figure || !environmental_choice || !medication_ack || !vision_ack){
                return res.status(500).send({
                 success: false,
                 message: 'Please provide all the field! '
                })
            }
            const data = await db.query(`INSERT INTO questionnaires (session_id, age_group,ethnicity,custom_ethnicity,gender,custom_gender,country,education,marital_status,
                employment, income,household_size,home_ownership,bestfriend,authority_figure,environmental_choice,medication_ack,
                vision_ack) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[session_id, age_group,ethnicity,custom_ethnicity,gender,custom_gender,
                    country,education,marital_status, employment, income,household_size,home_ownership,bestfriend,
                    authority_figure,environmental_choice,medication_ack,vision_ack] )
                    if(!data){
                        return res.status(404).send({
                            success:false,
                            message:"Error in data insertion!"
                        })
                    }
                    res.status(201).send({
                        success:true,
                        message: "New record has been added",
                        data
                    }) 
    }catch(err){
     console.log("Homepage loading error!!");
     res.status(500).send({
        success:false,
        message:"Error in loading homepage",
        err
     });
    }
})


module.exports = router;