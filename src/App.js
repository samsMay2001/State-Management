import logo from './logo.svg';
import './App.css';
import MealsList from './components/MealsList';
import MealsProvider from './components/MealsProvider';

function App() {
  return (
    <div className="App">
      {/* No need to wrap in MealsList in MealsProvider if you're just using normal functions check (MealList.js) and (Test.js) */}
      {/* <MealsProvider> */}
        <MealsList/>
      {/* </MealsProvider> */}
    </div>
  );
}

export default App;
