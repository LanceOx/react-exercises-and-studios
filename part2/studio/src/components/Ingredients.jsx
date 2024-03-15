function IngredientList({ingredients}) {
  let key = 0;
   return <div>
    <h3>Ingredients</h3>
    <ol>

      {ingredients.map(ingredient => {
        <li key={ingredient + key++}>{ingredient}</li>
      })}
    </ol>
   </div>
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 