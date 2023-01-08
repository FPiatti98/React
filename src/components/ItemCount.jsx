import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {

    //Esta funcion se encarga del montaje del contador de cantidad para cada item y del boton Agregar al carrito

    const [contador, setcontador] = useState(parseInt(1));
    const [itemStock, setitemStock] = useState(stock);
    const [sold, setSold] = useState(false)

    const increment = () => {
        contador < itemStock ? setcontador(contador + 1) : setcontador(contador = itemStock) 
    }

    const decrement = () => {
        contador > initial? setcontador(contador - 1) : setcontador(contador = initial )
    }

    const addToCart = (quantity) =>{
        if (contador <= itemStock) {
            setcontador(1);
            setitemStock(itemStock-quantity);
            setSold(true);
            onAdd(quantity);
        }
    }

    useEffect(() => {
        setitemStock(stock)
    }, [stock])

    return(
        <div className="d-flex flex-column md-3">
            <div className="d-flex flex-row ">
                <button className="btn btn-primary card-text m-3 h4" onClick= {decrement}><h4>-</h4></button>

                <p className="card-text m-3 h5"><h3>{contador}</h3></p>

                <button className=" btn btn-primary card-text m-3 h4" onClick= {increment}><h4>+</h4></button>
            </div>
                {sold? <Link to={"/cart"} className="btn btn-primary">Terminar La Compra</Link> : <button type="button" className="btn btn-primary" onClick={() => {addToCart(contador)}}>Agregar al carrito</button>}
        </div>
    )
}

export default ItemCount