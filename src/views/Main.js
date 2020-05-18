import React, { Fragment } from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Card  from '../components/main/Card';

const Main = () => {

     const cards = [
          {id: 1, name: 'card1'},
          {id: 2, name: 'card2'},
          {id: 3, name: 'card3'},
     ]
     return (
          <Fragment>
               <Header />
                    {cards.map(card => <Card key={card.id} card={card} />)}
               <Footer />
          </Fragment>
     );
}
 
export default Main;