import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';



const RecipeCards = () => {
    const [Recipes, setRecipes] = useState([]);
    const [search, searchRecipe] = useState([]);
    const navigate  = useNavigate();

    useEffect(() => {
        fetch("https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRecipes(data.hits); // Storing fetched data
                searchRecipe(data.hits); // Initializing search with all recipes
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const Filter = (event) => {
        const query = event.target.value.toLowerCase();
        const filteredRecipes = Recipes.filter(item => item.recipe.label.toLowerCase().includes(query));
        searchRecipe(filteredRecipes); // Update the search state
    };

  return (
    <div>
      <div>
          <input type="text" className="inputbox" placeholder="Find your favorite recipe here" onChange={Filter} />
          <IoSearchOutline className="search" />
        </div>
            <h1 className="mt-5 recipe1">Recipes</h1>
             <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ">
                    {search?.map((item, index) => (
                        <div className="col p-3" key={index}>
                            <Card className="align-items-center apply" style={{ height: "320px", backgroundColor: "azure",  borderRadius: "5px" }}>
                                <Card.Img variant="top" className="img-top" src={item.recipe.image} style={{ width: "90%", height: "190px", padding: "10px" }} />
                                <Card.Body>
                                    <Card.Title className="cardtitle1">{item.recipe.label}</Card.Title>
                                    <button class="btn btn-primary d-block mx-auto p-1" onClick={() => navigate(`/recipe/${index}`, { state: { recipe: item.recipe } })}>View details</button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default RecipeCards
