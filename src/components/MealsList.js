import { useMealsListContext } from "./MealsProvider"
import test from "./Test";

const MealsList = () => {
    // const {meals} = useMealsListContext(); // it's like subscribing to a service in angular
    let mealTest = test(); 
    return (
        <div>
            {/* using a normal function called (test()) to get meals will work also */}
            <h1>Meals List Using Context API</h1>
            {/* {meals && meals.map((meal, index)=> ( // map is like ngFor in angular
                <h2 key={index}>{meal}</h2>
            ))} */}
            {mealTest.map((meal, index)=> ( //
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList; 