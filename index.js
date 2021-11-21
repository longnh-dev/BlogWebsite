const express = require('express')
const app = express()
const port = 2002

app.get('/home', (req, res)=> {
    return res.send('Hello World')
})
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))