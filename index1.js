import express from 'express'
import { MongoClient } from 'mongodb'

const dbName = "school" //database name
const url = "mongodb://localhost:27017"

//this intializes a client object to interact with mongodb server
const client = new MongoClient(url) //connection to mongodb server

const app = express() //initializing express app
app.set('view engine', 'ejs') //setting ejs as template engine


app.get('/', async (req, resp) => {
    await client.connect() // establishing connection to mongodb server
    const db = client.db(dbName) //selecting database
    const collection = db.collection('students') //selecting collection

    const students = await collection.find().toArray() //fetching all documents from collection
    console.log(students)
    resp.render('students',{students})
})
app.listen(3400) //server listening on port 3200