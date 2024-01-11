import Nav from './components/Nav';
import RandomRecipe from './components/RandomRecipe';
import './App.css';

function App() {
  return (
    <div className = 'container'>
      <Nav />
      <header className='section has-text-centered'>
        <h1 className='title is-size-3 has-text-primary'>
          Eat Well, with our App
        </h1>
        <p>Cook anything you want with our well curated recipes!</p>
      </header>
      <RandomRecipe />
    </div>

  );
}

export default App;
