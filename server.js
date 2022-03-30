const express = require('express')
const app = express()
const dotenv = require('dotenv')
const baseRoutes = require('./routes/jotters.js')

dotenv.config()

app.set('view engine','ejs')



port = process.env.PORT || 5000

app.get('/',(request,response)=>{
    response.render('home')
})

app.get('/jotters',(request,response)=>{
    response.send('jotters')
})

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})