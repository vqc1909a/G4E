import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({message}) => {
     return (
          <header>Soy el Header
          
           <Link to='/login'>Login</Link>
           <Link to='/register'>Register</Link>
          </header>
     );
}
 
export default Header;