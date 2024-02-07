import MealItem from "../meals/meals-item";
import styles from "./meal-grid.module.css"


export default function Mealsgrid({Meals}){
    return (
      <>
        <ul className={styles.mealss} >
          {Meals.map((meal) => ( 
            <li key={meal.title}>
              <MealItem {...meal} />
            </li>
          ))}
        </ul>
      </>
    );
}