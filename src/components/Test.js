import React from "react";

function test(){
    // this code throws an error because you use (React.useState()) in a function that is neither a React Component or a custom react hook
    const todayMeals = [
        'Meal 1',
        'Meal 2',
        'Meal 3',
    ]
    const [meals, setMealList] = React.useState(todayMeals)
    return meals
}

export default test; 