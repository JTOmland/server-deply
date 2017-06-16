const express = require('express')
const app = express()
app.use(express.static('public'))

app.listen(9000, function(){
    console.log('Server running on port 9000')
});