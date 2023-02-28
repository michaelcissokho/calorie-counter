"require strict"
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config()

const PORT = +process.env.PORT || 5000

app.listen(PORT, function(){
    console.log(`Started on http://localhost:${PORT}`)
})