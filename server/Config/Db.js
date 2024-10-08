const mongeeos = require("mongoose");

const connectDB = async () => {
  try {
    const connect = mongeeos.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUniufiedTopology: true,
    });
    console.log(`Server ${PORT} Connected successfully`)
  } catch (error) {
    console.log("something error",error)
    process.exit(1)
  }
};


module.exports = connectDB
