import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Product = ({product}) => {
   
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for product is null, return Product doesn't exist
  if(!product) {

    return(<div style={divStyle}><h2>  No Product was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> Name: {product.Name} </h2>
      <p> Key: {product.Key} </p>
      <p> Type: {product.ProductType} </p>
      <h3> Price : {product.Unit} </h3>
     
    </div>
  )
}

export default Product ;