import mongoose from "mongoose";

const medicalRecordSchema=new mongoose.Schema(
    {
        name:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Patient",
        },
        diseases:[
            {
                type:String,
                default:"",
            },
        ],
        visitedHospitals:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital",
            },
        ],
        medicinesTaking:[
            {
                type:String,
                required:true,
            }
        ]
    },
    {timestamps:true}
);



export const MedicalRecord=mongoose.model("MedicalRecord",medicalRecordSchema);