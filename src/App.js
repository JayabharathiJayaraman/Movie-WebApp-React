import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Router>
      <NavBar></NavBar> 
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
          </Route>
          <Route exact path = '/movie'>
          <Movie></Movie>
          </Route>
      </Switch>
      <Footer></Footer>
      </Router>
        </main>
    </div>
  );
}

export default App;
