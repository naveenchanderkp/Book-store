const mongoose= require('mongoose')

const userBooks = new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,required:true},
    genere:{type:String,required:true},
    year:{type:Number,required:false},
    isbn:{type:String,required:true},
    pdf:{type:String},
    image:{type:String}
})


const UserBook =  mongoose.model("Books",userBooks)

module.exports = UserBook