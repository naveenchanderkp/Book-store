const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./Config/Db')
const authRoutes = require('./Routes/AuthRoutes')
const bookRoutes = require('./Routes/BookRoutes')
const cors = require('cors');

var bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


dotenv.config()
connectDB()


app.use(express.json())
app.use(cors());

app.use('/api/books',authRoutes)
app.use('/api/books',bookRoutes)



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server${PORT} connected successfully`))