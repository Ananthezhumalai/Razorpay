import React,{useState} from "react";
import '../styles/cart.css';


const Cards = ({ item, handleClick,setShow,size }) => {
  const [cart, setCart] = useState([]);
  const { title,  price, img } = item;
  // let [num, setNum]= useState(0);
  
  // let incNum =()=>{

  //   {
  //   setNum(Number(num)+1);
  //   }
  // };
  // let decNum = () => {
    
  //    {
  //     setNum(num - 1);
  //    }
  // }
  



  return (
    <div>
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price - ${price}Rs</p>
        <button className="button2" onClick={() => handleClick(item)} >Add to Cart</button>
      </div>
      
    </div>
    

   
 
 
    </div>
  );
};

export default Cards;
// <div >
// <button className="button3" type="button" onClick={decNum}>-</button>

// {num}

// <button type="button" onClick={incNum}>+</button>
// </div>

// id, title, autor, price, img
