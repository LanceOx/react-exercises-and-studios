let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function giveRating(props) {
    let result = null;
   props.rating >= 1 & props.rating <=5 ? result = (<h3>{stars[props.rating - 1]}</h3>): '';
   return result;
   } 
  return giveRating;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
