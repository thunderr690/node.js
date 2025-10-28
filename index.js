import express from 'express'
import { MongoClient } from 'mongodb'

const dbName = "school" //database name
const url = "mongodb://localhost:27017"


//this intializes a client object to interact with mongodb server
const client = new MongoClient(url) //connection to mongodb server

async function dbConnection(){
    await client.connect() // establishing connection to mongodb server
    const db = client.db(dbName) //selecting database
    const collection = db.collection('students') //selecting collection

    const result = await collection.find().toArray() //fetching all documents from collection
    console.log(result)
}
dbConnection() //invoking the function to connect to db and fetch data

const app = express() //initializing express app

app.listen(3200) //server listening on port 3200