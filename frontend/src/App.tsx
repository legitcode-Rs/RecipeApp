
import "./App.css"
import { useState } from "react";



const App = () => {
const [searchTerm, setSearchTerm] = useState("burgers");
const [recipes, setRecipes] = useState([]);

const handleSearchSubmit = async () => {
  try {
    const recipes = await api.searchRecipes(searchTerm, 1)
  } catch (e) {
    console.log(e);
  }
}

  return (
    <div> Hello from recipe App</div>
  )
}

export default App;