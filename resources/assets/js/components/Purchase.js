import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Purchase = ({product}) => {
   
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for product is null, return Product doesn't exist
  if(!product) {

    return(<div style={divStyle}><h2>  No Test Product was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> {product.name} </h2>
      <p> {product.packsize} </p>
      <p> {product.unitprice} </p>
      <p> {product.qty} </p>
      <h3> Price : {product.payment} </h3>
     
    </div>
  )
}

export default Purchase ;