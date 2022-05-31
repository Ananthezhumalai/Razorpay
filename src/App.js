import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Product from "./components/product";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  let [num, setNum]= useState(0);
 

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
  
    arr[ind].amount +=d;
    // arr[ind].amount=!0;

    if (arr[ind].amount === 0) arr[ind].amount =! 0 ;
    setCart([...arr]);
    // setCart([amount=0])
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Product  handleClick={handleClick} />
      ) :
     
      (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
     
    </React.Fragment>
  );
};

export default App;