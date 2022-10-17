const express = require('express');
const app = express();
const router =  require('./router')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(router)
app.use(express.static(__dirname + '/public'))

app.listen(8000, () =>{
    console.log(`Server is running at ${8000}`)
})