import mongoose from 'mongoose';

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTURENT",
    }).then(() =>{
        console.log(`Database Connected successfully`);   
    }).catch((err) =>{
        console.log(`Some error occured while database not connect ${err}`);
        
    });
};