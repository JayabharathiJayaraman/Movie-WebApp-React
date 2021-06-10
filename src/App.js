import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import CheckoutIcon from './components/CheckoutIcon'
import Footer from './components/Footer';
import CustomerOrders from './components/CustomerOrders';
import Login from './components/Login'
import { useSelector } from "react-redux";

function App() {
  const currentloginuser = useSelector(state => state.login.currentuser);
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
          <Route exact path = '/checkoutIcon'>
          <CheckoutIcon></CheckoutIcon>
          </Route>
          <Route exact path = '/userLogIn'>
          {currentloginuser ? <CheckoutIcon/> : <Login/>}
          </Route>
          <Route exact path = '/customerorders'>
          {currentloginuser ? <CustomerOrders/> : <Login/>}
          </Route>
      </Switch>
      <Footer></Footer>
      </Router>
        </main>
    </div>
  );
}

export default App;
