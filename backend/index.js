const express=require('express')
const cors=require('cors')
const product=require('./productdata')
const app=express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hiiicacacii')
})

app.get('/product',(req,res)=>{
    res.send(product)
})
app.listen(4000)