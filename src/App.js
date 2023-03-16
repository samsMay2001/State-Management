import logo from './logo.svg';
import './App.css';
import MealsList from './components/MealsList';
import MealsProvider from './components/MealsProvider';
import { useReducer, useState } from 'react';



const reducer = (state, action)=> {
  if (action.type == "ride") return {money: state.money + 10}; 
  if (action.type == "fuel") return {money: state.money - 50}; 
  return new Error(); 
}

function App() {

  const initialState = {money: 100}; 
  const [state, dispatch] = useReducer(reducer, initialState); 
  const [state1, setState] = useState(initialState, reducer)

  return (
    <div className="App">
      {/* <h1>Wallet : {state.money}</h1> */}
      {/* doesn't render anything because useState doesn't handle complex data types like arrays or objects */}
      <h1>Wallet : {state1.money}</h1> 
      <div>
        {/* <button onClick={()=> dispatch({type : 'ride'})}>A new customer</button>
        <button onClick={()=> dispatch({type : 'fuel'})}>Refil tank</button> */}
        <button onClick={()=> setState({type : 'ride'})}>A new customer</button>
        <button onClick={()=> setState({type : 'fuel'})}>Refil tank</button>
      </div>
    </div>
  );
}

export default App;
