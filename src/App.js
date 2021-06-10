import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import CheckoutIcon from './components/CheckoutIcon'
import Footer from './components/Footer';
import User from './components/User';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className= "hiddenSidebar">
        <Router>
      <NavBar></NavBar> 
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
          </Route>
          <Route exact path = '/movie'>
          <Movie></Movie>
          </Route>
          <Route exact path = '/checkoutIcon'>
          <CheckoutIcon></CheckoutIcon>
          </Route>
          <Route exact path = '/user'>
          <Login></Login>
          </Route>
      </Switch>
      <Footer></Footer>
      </Router>
        </main>
    </div>
  );
}

export default App;
