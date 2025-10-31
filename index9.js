// Connect Node.js with MongoDB using Mongoose

import mongoose from "mongoose"

async function dbConnection() {
    await mongoose.connect("mongodb://localhost:27017/school")
    const schema = mongoose.Schema({
        name: String,
        age: Number,
        email: String
    })
    const studentmodel = mongoose.model("students", schema)
    const result = await studentmodel.find()
    console.log(result);
}

dbConnection()