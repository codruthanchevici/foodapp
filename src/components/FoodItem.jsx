import styles from './fooditem.module.css'
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} className={styles.itemImage}/>
      <div className={styles.itemContent}>
        <h1 className={styles.itemName}>{food.title}</h1>

      </div>
       <div className={styles.buttonContainer}> 
        <button onClick={()=>{console.log(food.id);
          setFoodId(food.id);
        }} className={styles.itemButton}>View recipe</button>
        </div>
    </div>
  );
}
