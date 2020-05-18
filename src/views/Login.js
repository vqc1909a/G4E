import React, { Fragment } from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

const Login = () => {
     return (
          <Fragment>
               <Header />
                   <form>
                        Hola soy formulario
                   </form>
               <Footer />
          </Fragment>
     );
}
 
export default Login;