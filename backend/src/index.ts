import express from "express"
import cors from "cors"

const app = express(); // it will a express app for us.
app.use(express.json()) // convinience thing that helps to convert the body of the request
app.use(cors()) //security

//add a end point to test if the things are wroking.
app.get("/api/recipes/search", async(req, res)=>{
    res.json({message: 'success'})
})

app.listen(5000, ()=>{
    console.log("Server running on localhost:5000")
})