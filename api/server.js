"require strict"
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config()

const PORT = process.env.NODE_ENV == 'test' ? 5000 : 5000

app.listen(PORT, function(){
    console.log(`Started on http://localhost:${PORT}`)
})