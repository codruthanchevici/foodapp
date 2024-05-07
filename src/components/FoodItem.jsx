export default function FoodItem({ food }) {
  return (
    <div>
      <h1>{food.title}</h1>
      <img src={food.image} />
      <button>View recipe</button>
    </div>
  );
}
