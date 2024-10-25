//const Books = require('../Models/Books')
const path = require('path')
const multer = require('multer')




///multer storing

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'image') {
            cb(null, 'uploads/images');
        } else if (file.fieldname === 'pdf') {
            cb(null, 'uploads/pdf');
        } else {
            cb(new multer.MulterError('Unexpected field'), false); 
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'image' || file.fieldname === 'pdf') {
            cb(null, true); // Accept the file
        } else {
            cb(new multer.MulterError('Unexpected field'), false); // Reject the file
        }
    }
});


const uploadFiles = upload.fields([
    {name:'pdf',maxCount:1},
    {name:'image',maxCount:1}
])

module.exports = uploadFiles