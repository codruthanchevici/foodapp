import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "cb3d8ada05ae45cc85fd659dc0b6a925";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      Food Details: {foodId}
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} />
      </div>
      <div>
        <span>
          <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>{food.vegetarian ? "Vegatarian" : "Non-vegetarian"}</span>
      </div>
      <div>
        <span>{food.pricePerServing / 100} Per Serving</span>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedIntructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
