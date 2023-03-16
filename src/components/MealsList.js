import { useMealsListContext } from "./MealsProvider"

const MealsList = () => {
    const {meals} = useMealsListContext(); // it's like subscribing to a service in angular
    return (
        <div>
            <h1>Meals List Using Context API</h1>
            {meals && meals.map((meal, index)=> ( // map is like ngFor in angular
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList; 