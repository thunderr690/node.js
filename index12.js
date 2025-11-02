// Make PUT and DElETE REST API with Mongoose

import mongoose from "mongoose"
import express from "express"
import studentModel from "./model/studentModel.js";

const app = express()

app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("______connected_______");
})

app.get('/', async (req, resp) => {
    const studentdata = await studentModel.find()
    resp.send({ studentdata })
})
app.post('/save', async (req, resp) => {
    console.log(req.body)
    const { name, age, email } = req.body
    if (!req.body || !name || !age || !email) {
        resp.send({
            message: "data not stored",
            success: false,
            storedInfo: null
        })
        return false
    }
    const studentData = await studentModel.create(req.body)

    resp.send({
        message: "data stored",
        success: true,
        storedInfo: studentData
    })
})

app.put("/update/:id", async (req, resp) => {

    const id = req.params.id

    console.log(req.body, id)

    const studentData = await studentModel.findByIdAndUpdate(id, {
        ...req.body
    })
    resp.send({
        message: "data updated",
        success: true,
        info: studentData
    })
})

app.delete("/delete/:id", async (req, resp) => {

    const id = req.params.id



    const studentData = await studentModel.findByIdAndDelete(id)
    resp.send({
        message: "data delete",
        success: true,
        info: studentData
    })
})

app.listen(3200)