const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const api_overview = process.env.BASE_API
const jotters = process.env.JOTTERS

const request = ()=>{

    axios.get(jotters)
    .then((data)=>{
        var jotters = data.data
        console.log(jotters)
        jotters.forEach(element => {
            console.log(element.title)
        });
    })
}

request()

module.exports = request;