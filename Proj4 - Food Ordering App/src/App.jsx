import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartButton, setCartButton]= useState(false);

  const showCartHandler = () => {
    setCartButton(true);
  }
  const hideCartHandler = () => {
    setCartButton(false);
  }

  return (
    <>
      {cartButton && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
