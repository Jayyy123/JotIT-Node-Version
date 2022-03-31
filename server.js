const express = require('express')
const app = express()
const dotenv = require('dotenv')
const baseRoutes = require('./routes/jotters.js')
const axios = require('axios')
dotenv.config()

const api_overview = process.env.BASE_API
const jotters = process.env.JOTTERS



app.set('view engine','ejs')



port = process.env.PORT || 5000

app.get('/',(request,response)=>{
    response.render('home')
})

app.get('/jotters',(request,response)=>{

    axios.get(jotters)
    .then((data)=>{
        var jotters = data.data
        console.log(jotters)
        
        response.render('jotters',{'j':jotters})
    })

})

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})