import './navBar.css';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar(){
  //const value = useSelector(state => state.shopc[1].count);
  let initialshoppingcartitemcount=0
  const value = useSelector(state => state.shopc.map(cartItem=>{
    initialshoppingcartitemcount += parseInt(cartItem.count)
    console.log('initialshoppingcartitemcount: ', initialshoppingcartitemcount);
    return initialshoppingcartitemcount
  }));
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
        <nav className = "navbar">
            <div className= "navbar-container">
            <Link to = "/" className = "navbarLogo" onClick = {closeMobileMenu}>
            Movies WebbShop<i class="fas fa-tv"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/movie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Movie
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/checkout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Checkout
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/checkoutIcon'
                className='nav-links'
                onClick={closeMobileMenu}> 
              <i class="fas fa-shopping-cart">{initialshoppingcartitemcount-1}</i>
              </Link>
            </li>
            </ul>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
