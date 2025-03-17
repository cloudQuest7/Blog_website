import mongoose from "mongoose";

const dbConnection = mongoose.connect('mongodb://0.0.0.0/Blog_website').then(() =>{
    console.log("connected to the database")
})

export { dbConnection };