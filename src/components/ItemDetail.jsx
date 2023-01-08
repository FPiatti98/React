import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {

    //Esta funcion se encarga del montaje del detalle del producto

    const [itemStock, setItemStock] = useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    };

    useEffect(()=>{
        setItemStock(item.stock);
    },[item])

    return(
        <div className="row p-5">
            <div className= "col-md-3 offset-md-1">
                <img src={item.image} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-5 offset-md-2 text-light">
                <h1>{item.name}</h1>
                <h3>Editorial: {item.editorial}</h3>
                <h3>Fecha de Lanzamiento: {item.date}</h3>
                <p><b>Descripcion</b>: {item.description}</p>
                <p><b>Precio</b>: ${item.price}</p>
                <ItemCount stock={item.stock} initial={item.initial} onAdd={onAdd}/>
            </div>
        </div>
    )

}

export default ItemDetail;
