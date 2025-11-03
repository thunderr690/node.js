// Connect MongoDB Atlas with Node.js

import { MongoClient } from "mongodb"

const url = "mongodb+srv://amankvm2_db_user:Aman%40123@cluster0.vokmylh.mongodb.net/?appName=Cluster0"
const database = "school"
const collection = "student"
const client = new MongoClient(url)

client.connect().then(() => {
    console.log("_______Connect______")
})

async function dbConnection() {
    const db = client.db(database)
    const collectResult = db.collection(collection)
    const result = await collectResult.find().toArray()
    console.log(result)
}

dbConnection()