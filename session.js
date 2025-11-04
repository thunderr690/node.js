import express from 'express'
import session from 'express-session'
const app = express()

app.set("view engine","ejs")

app.use(session({
    secret:'apple',
}))

app.use(express.urlencoded({ extended: true}))

app.get('/sessionlogin',(req, resp) => {
    resp.render('sessionlogin')
})

app.post("/profile",(req, resp) => {
    req.session.data= req.body
    console.log(req.session.data)
    resp.render('sessionprofile')
})

app.get("/", (req, resp) => {
    const data = req.session.data
    console.log("data",data)

    resp.render("sessionhome",{data})
})



app.listen(3200)