import React from "react";

const CartWidget = () => {

    let prodQuantity = 1 

    return(
        <li className="nav-item  d-flex flex-row justify-content-between md-2 align-items-center cart">
             <img src="shopping-cart.png" className="responsive"></img>
             <p>{prodQuantity}</p>
        </li>
    )
};

export default CartWidget;

