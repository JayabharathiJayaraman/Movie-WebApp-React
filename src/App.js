
import './App.css';
import MovieTest from './components/MovieTest'
import MovieHistory from './components/MovieHistory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Fetch demo med Redux</h1>
      </header>
      <main>
        <h2> Search Movie!</h2>
        <MovieTest />
        <MovieHistory />
       
      </main>
    </div>
  );
}

export default App;
