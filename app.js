
// Defined dependencies
const express = require('express')
const app = express()
const path = require('path');



// Expose all files inside public folder
app.use('/public', express.static(path.join(__dirname, '/public')))

// Some routing
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/batman', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

