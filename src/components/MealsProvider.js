import React from "react";

const MealsContext = React.createContext(); 

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"]

const MealsProvider = ({children}) => {
    const [meals, setMealList] = React.useState(todaysMeals);   

    return (
        <MealsContext.Provider value={{meals}}> 
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext)

export default MealsProvider; 

// this is like a service in angular