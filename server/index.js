const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./Config/Db')
const authRoutes = require('./Routes/AuthRoutes')

dotenv.config()
connectDB()
const app = express()

app.use(express.json())

app.use('/api/books',authRoutes)

const PORT = process.env.PORT || 5000;
ap.listen(PORT,()=>console.log(`Server${PORT} connected successfully`))