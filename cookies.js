// Set and Get Cookies in node js

import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/login',(req, resp) => {
    resp.render('login')
})

app.post('/profile',(req, resp) => {
    resp.setHeader('Set-Cookie','login=true')
    resp.setHeader('Set-Cookie',"name="+req.body.name)

    resp.render('profile')
})

app.get("/",(req, resp) => {
    
    const userName = req.cookies.name; // Or whatever your cookie is named

    console.log(userName);
    resp.render('home', { name: userName || 'Guest' });
})

app.listen(3200)