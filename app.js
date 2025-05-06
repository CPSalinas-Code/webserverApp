const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.static('public'))

app.get('/generic',(req,res)=>{
    res.sendFile(__dirname+'/public/generic.html')

})

app.get('/', function(req,res){
    res.send('Hola Nomina360')
})
app.get('/urlTest', (req,res)=>{
    res.send('Print URL test page')
})


//app.listen(process.env.PORT_SERVER)
app.listen(process.env.PORT_SERVER,()=>{
    console.log(`Servidor escuchando en http://${process.env.URL_ENDPOINT}:${process.env.PORT_SERVER}`)
})