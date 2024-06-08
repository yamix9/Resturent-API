require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose')
const app = express()
const resturentRoute = require('./routes/resturentRoute');
const errorMiddleware = require ('./middleware/errorMiddleware')
const cors = require('cors')


const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/resturent',resturentRoute);


app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.use(errorMiddleware);


mongoose.set("strictQuery",false)
mongoose.
connect(MONGO_URL)
.then(() =>{
    console.log('Connected to MongoDB!')
    app.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`)
      })
}).catch((error) => {
    console.log(error)
})

    