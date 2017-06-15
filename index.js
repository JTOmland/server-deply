const express = require('express')
const app = express()
app.get('/', function(req,res){
    res.send("Big Hey From Deployed Code after modified and pushed")
});

app.listen(9000, function(){
    console.log('Server running on port 9000')
});