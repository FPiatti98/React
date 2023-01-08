import React from "react";
import Item from "./Item";

const ItemList = ({prodlist}) => {

    return (
        <div className="container-xxl m-5 row">
            {prodlist.map(product => <Item product={product} key={product.id}/>)}
        </div>
    )

}

export default ItemList