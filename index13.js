// Fix cors issues in node.js APIs(cross-origin resource sharing)

import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/', (req, resp) => {
    resp.send({
        name:"aman",
        age:24,
        email:"aman@test.com"

    })
})

app.listen(3200)