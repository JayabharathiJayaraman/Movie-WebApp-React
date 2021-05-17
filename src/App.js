import logo from './logo.svg';
import './App.css';
import Fact from './components/MovieTest'
import MovieTest from './components/MovieTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Fetch demo med Redux</h1>
      </header>
      <main>
        <h2> Some facts!</h2>
        <MovieTest />
       
      </main>
    </div>
  );
}

export default App;
