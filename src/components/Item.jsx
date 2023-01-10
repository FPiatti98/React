import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {

    //Esta funcion se encarga del montaje de cada item dentro del ItemList

    return (
        <div className="card producto m-5 col-2 item">
            <Link to={"/item/" + product.id} className="text-dark text-decoration-none">
                <img src={product.image} className="card-img-top productImg" alt="card-img-top"></img>
                <div className="card-body text-light">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Items en stock : {product.stock}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;