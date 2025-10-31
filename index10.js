// Get REST API with Mongoose to fetch data from MongoDB

import mongoose from "mongoose"
import express from "express"
import studentModel from "./model/studentModel.js";

const app = express()

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("______connected_______");
})


app.get('/', async (req, resp) => {
    const studentdata = await studentModel.find()
    resp.send({studentdata})
})

app.listen(3200)

// async function dbConnection() {
//     await mongoose.connect("mongodb://localhost:27017/school")
//     const schema = mongoose.Schema({
//         name: String,
//         age: Number,
//         email: String
//     })
//     const studentmodel = mongoose.model("students", schema)
//     const result = await studentmodel.find()
//     console.log(result);
// }

// dbConnection()