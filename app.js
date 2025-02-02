
const express = require('express')
const app = express();
const path=require('path')
const port = 3000
app.use(express.static('public'))
// express.urlencoded(); dont forget this
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
 
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})