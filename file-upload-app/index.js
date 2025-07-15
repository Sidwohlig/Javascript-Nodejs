const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.static('public'));

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files to /uploads
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('myfile'), (req, res) => {
  console.log('Uploaded file:', req.file);
  res.send('✅ File uploaded successfully');
});

app.listen(3000, () => {
  console.log('🚀 File upload server running on http://localhost:3000');
});
