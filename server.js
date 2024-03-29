"require strict"
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config()

const PORT = +process.env.PORT || 5001

app.listen(PORT, function(){
    console.log('NODE ENVIRONMENT:', process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'production'){
        console.log(`Started on "https://calorific.herokuapp.com" on port ${PORT}`)
    }else{
        console.log(`Started on http://localhost:${PORT}`)
    }
})