import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: #000;




`



const Header = ({message}) => {
     return (
          <StyledHeader>Soy el Header
          
            <div className="logo">


            </div>
            <div className = "navbar">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            <div className="categorias">
              <ul>
                <li>Videojuegos</li>
                <li>Funko</li>
                <li>Preventas</li>
                <li>Coleccionables</li>
                <li>Audip</li>
                <li>Ropa y accesorios</li>
                <li>Mas</li>
              </ul>
            </div>
          </StyledHeader>
     );
}
 
export default Header;
