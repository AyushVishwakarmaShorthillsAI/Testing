const express=require('express')

const app=express()

const PORT = 3009

app.get('/', (req,res)=>{
    res.end("Server Running !!")
})


app.get('/about', (req,res)=>{
    res.end("This is the about page !!")
})


app.get('/contact us', (req,res)=>{
    res.end("This is the contact us page !!")
})

app.get('/help', (req,res)=>{
    res.end("This is the Help page, Happy to help !!")
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})

