import express from 'express'
import { MongoClient } from 'mongodb'

const dbName = "school" //database name
const url = "mongodb://localhost:27017"

//this intializes a client object to interact with mongodb server
const client = new MongoClient(url) //connection to mongodb server

const app = express()
app.use(express.urlencoded({extended:true})) // to parse form data
app.set('view engine', 'ejs')
client.connect().then((connection) => {
    const db = connection.db(dbName)

    app.get("/api", async(req, resp) => {
        const collection = db.collection("students") //selecting collection
        const students = await collection.find().toArray()
        resp.send(students)
    })
    app.get("/ui", async(req, resp) => {
        const collection = db.collection("students") //selecting collection
        const students = await collection.find().toArray()
        resp.render('students',{students})
    })

    app.get('/add',(req, resp) => {
        resp.render(`add-student`)
    })
    app.post("/addstudent", async(req, resp) => {
       // console.log(req.body)
        const collection = db.collection("students") //selecting collection
        const result = await collection.insertOne(req.body)
        console.log(result);
        
        // const students = await collection.find().toArray()
         resp.send("data saved")
    })
}) 

app.listen(3400)