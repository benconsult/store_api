require('dotenv').config()
//async-errors
require('express-async-errors')
const express = require('express')
const app =express()//invoke express

const conncetDB = require('./db/connect')////import db

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const productRouter = require('./routes/products') //import router




//middleware 
app.use(express.json())

//route
//home route
app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Product route</a>')
})

//route middleware 
app.use('/api/v1/products', productRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
try {
    //conncetDB
    await conncetDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}`))

} catch (error) {
    console.log(error);
}

}

start()