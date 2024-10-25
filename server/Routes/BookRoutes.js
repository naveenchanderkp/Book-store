const express = require('express')
const Books = require('../Models/Books')
const uploadFiles = require('../Controllers/BooksController')
const router = express.Router()


router.post('/upload',uploadFiles,async(req,res)=>{
try {
    const {title,author,genere,year,isbn} = req.body

    const pdfPath = req.files['pdf'] ? req.files['pdf'][0].path : null
    const imagePath = req.files['image'] ? req.files['image'][0].path : null

    const newBook = new Books({
        title,
        author,
        genere,
        year,
        isbn,
        pdf : pdfPath,
        image : imagePath,
    })

    await newBook.save();

    res.status(200).json({message:"Book added sucessfully",book:newBook})

} catch (error) {
    console.log(error)
    res.status(400).json({message:'Error uplaoding books details'})
}
})

router.get('/getBooks',async(req,res)=>{
   try {
     const books = await Books.find({ })
     if(!books || books.length === 0){
        res.status(400).json({message:"No books found"})
     }
        res.status(200).json({message:"success",books})
     
   } catch (error) {
    console.log(error.message)
    res.status(500).json({message:"Error retrieving the books"})
   }
})

module.exports = router;