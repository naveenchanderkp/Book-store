const mongeeos = require("mongoose");
const PORT = 5000

const connectDB = async () => {
  try {
    const connect = mongeeos.connect(process.env.MONGO_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log(`Server ${PORT} Connected successfully`)
  } catch (error) {
    console.log("something error",error)
    process.exit(1)
  }
};


module.exports = connectDB
