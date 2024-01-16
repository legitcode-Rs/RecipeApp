import express from "express"
import cors from "cors"
import * as RecipeAPI from "./recipe-api";
const app = express(); // it will a express app for us.
app.use(express.json()) // convinience thing that helps to convert the body of the request
app.use(cors()) //security

//add a end point to test if the things are wroking.
app.get("/api/recipes/search", async(req, res)=>{
    const searchTerm = req.query.serchTerm as string;
    const page = parseInt(req.query.page as string);
    const results = await RecipeAPI.searchRecipes(searchTerm, page);

    return res.json(results);
})

app.listen(5000, () =>{
    console.log("Server running on localhost:5000")
})