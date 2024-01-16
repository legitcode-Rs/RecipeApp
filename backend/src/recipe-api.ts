const apiKey = process.env.API_KEY; 

//
export const searchRecipes = async(serchTerm:string, page:number) =>{
    if (!apiKey){
        throw new Error ("Api Key not found")
    }

    // Receipe end point
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey: apiKey,
        query: serchTerm,
        number: "10",
        offset: (page * 10 ).toString()
    }
    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url);
        const resultsJson = await searchResponse.json();
        return resultsJson;
    } catch (error) {
        console.log(error)
    }
};

