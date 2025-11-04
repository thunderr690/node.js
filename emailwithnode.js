// Send Email with node.js

import express from 'express'
import nodemailer from 'nodemailer'
const app = express()


const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"thundergam69@gmail.com",
        pass:'hxat nxdd nhwx qyiy'
    }
})

app.use(express.json())

// app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs")
app.get('/email', (req, resp) => {
    resp.render("email")
})

app.post("/submit-email", (req, resp) => {
    console.log(req.body)

    const mailOption = {
        from :'thundergam69@gmail.com',
        to: 'thundergam69@gmail.com',
        subject:req.body.subject,
        text:req.body.mail
    }
    transpoter.sendMail(mailOption,(error, info) => {
        if(error){
            req.send("email operation failed, try again")
        }else{
            resp.send('mail send')
        }
    })
    resp.send("email send")
})


app.listen(3200)