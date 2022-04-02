const express = require('express')
const app = express()
const dotenv = require('dotenv')
const baseRoutes = require('./routes/jotters.js')
const axios = require('axios')
const path = require('path')

dotenv.config()

const api_overview = process.env.BASE_API
const jotters = process.env.JOTTERS
const add_jotter = process.env.ADD_JOTTER
const edit_jotter = process.env.EDIT_JOTTER




app.use('/public',express.static('public'))

app.set('view engine','ejs')

axios.get(api_overview).then((data)=>{
    console.log(data)
})

port = process.env.PORT || 5000

app.get('/',(request,response)=>{
    response.render('home')
})

app.get('/jotters/:id',(request,response)=>{

    axios.get(jotters)
    .then((data)=>{
        var jotters = data.data
        console.log(jotters)
        response.render('jotters',{'j':jotters})
    })

    axios.get(edit_jotter+`${request.params.id}`)
    .then((data)=>{
        console.log(data)
    })
})


app.get('/add-jotter',(request,response)=>{

    console.log(request.body)
    response.render("add_jotters")
})

app.use((request,response)=>{
    response.render('404')
})


app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})