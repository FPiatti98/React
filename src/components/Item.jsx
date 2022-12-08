import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({product}) => {

    return (
        <div className="card producto m-5 col-2">
            <Link to={"/item/" + product.id} className="text-dark text-decoration-none">
                <img src={product.image} className="card-img-top productImg" alt="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Precio :{product.price}</p>
                    <p className="card-text">Items en stock : {product.stock}</p>
                </div>
            </Link>
            <ItemCount stock={product.stock} initial={product.initial}/>
        </div>
    )
}

export default Item;