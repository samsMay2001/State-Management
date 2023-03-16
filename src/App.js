import logo from './logo.svg';
import './App.css';
import MealsList from './components/MealsList';
import MealsProvider from './components/MealsProvider';

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList/>
      </MealsProvider>
    </div>
  );
}

export default App;
