import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/product.css";

const Product = ({item, handleClick,handlchanges  }) => {

  
  
  return (
    <React.Fragment>
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} onchange={handlchanges} />
      ))}
    </section>
   
   
    </React.Fragment>
  );
};

export default Product;
