import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
                <Link to='/'>Home</Link>
              </div>
            <div class='footer-link-items'>
              <Link to='/movie'>Movie</Link>
            </div>
            <div class='footer-link-items'>
              <Link to='/checkout'>Checkout</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              PopCorn Flix 
              </Link>
            </div>
            <small class='website-rights'>Film © 2020</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;