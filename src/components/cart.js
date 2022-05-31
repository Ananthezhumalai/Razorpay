import React, { useState, useEffect } from "react";
import "../styles/cart.css";
// import GooglePayButton from '@google-pay/button-react';
// import {Image} from './logo.jfif'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const phonePrice = 67999;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
   
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  
  // const handlesum = ()=>{
  //   let ans = amount;
  //   cart =( ans += item.amount*item.) 
  // }



  useEffect(() => {
    handlePrice();
    //total amount
  });
 

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_eQ8feeQ6v2mY3v",
      currency: "INR",
      amount: amount * 100,
      name: "Shopping Cart",
      description: "Thanks for purchasing",
      image:
        "./logo.jfif",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Shopping Cart",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
// 
  return (
    <div>
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
          <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
         <div>
         <button onClick={() => handleChange(item,-1)}>-</button>
         <button>{item.amount}</button>
         <button onClick={() => handleChange(item,1)}>+</button>
      
        
 
         </div>
          <div>
          
            <span>{item.price*item.amount}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
    
    <div className="gpay">
 

 
  <button id="button3" onClick={() => displayRazorpay(price)}>
                
              </button>



  </div>
    </div>
  );
};

export default Cart;
// <button onClick={() => handleRemove(item.id)}>Remove</button>
// <img src={item.img} alt="" />
// <div>
// <button onClick={() => handleChange(item, 1)}>+</button>
// <button>{item.amount}</button>
// <button onClick={() => handleChange(item, -1)}>-</button>
// </div>

// <GooglePayButton
// environment="TEST"
// paymentRequest={{
//   apiVersion: 2,
//   apiVersionMinor: 0,
//   allowedPaymentMethods: [
//     {
//       type: 'CARD',
//       parameters: {
//         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//         allowedCardNetworks: ['MASTERCARD', 'VISA'],
//       },
//       tokenizationSpecification: {
//         type: 'PAYMENT_GATEWAY',
//         parameters: {
//           gateway: 'example',
//           gatewayMerchantId: 'exampleGatewayMerchantId',
          
//         },
//       },
//     },
//   ],
//   merchantInfo: {
//     merchantId: '12345678901234567890',
//     merchantName: 'Demo Merchant',
//   },
//   transactionInfo: {
//     totalPriceStatus: 'FINAL',
//     totalPriceLabel: 'Total',
//     totalPrice: '1',
//     currencyCode: 'USD',
//     countryCode: 'US',
//   },
//   shippingAddressRequired: true,
//   callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
// }}
// onLoadPaymentData={paymentRequest => {
//   console.log('Success', paymentRequest);
// }}
// onPaymentAuthorized={paymentData => {
//     console.log('Payment Authorised Success', paymentData)
//     return { transactionState: 'SUCCESS'}
//   }
// }
// onPaymentDataChanged={paymentData => {
//     console.log('On Payment Data Changed', paymentData)
//     return { }
//   }
// }
// existingPaymentMethodRequired='true'
// buttonColor='white'
// buttonType='Buy'
// />