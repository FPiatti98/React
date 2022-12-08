import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    return(
        <div className="row p-5">
            <div className= "col-md-3 offset-md-1">
                <img src={item.image} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-5 offset-md-2">
                <h1>{item.name}</h1>
                <h3>Editorial: {item.editorial}</h3>
                <h3>Fecha de Lanzamiento: {item.date}</h3>
                <p><b>Descripcion</b>: {item.description}</p>
                <p><b>Precio</b>: ${item.price}</p>
                <ItemCount stock={item.stock} initial={item.initial}/>
            </div>
        </div>
    )

}

export default ItemDetail;
