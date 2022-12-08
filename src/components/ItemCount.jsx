
import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setcontador] = useState(parseInt(1))

    const increment = () => {
        contador < stock ? setcontador(contador + 1) : setcontador(contador = stock) 
    }

    const decrement = () => {
        contador > initial? setcontador(contador - 1) : setcontador(contador = initial )
    }

    return(
        <div className="d-flex flex-column md-3">
            <div className="d-flex flex-row ">
                <button className="card-text m-3 h4" onClick= {decrement}>-</button>

                <p className="card-text m-3 h5">{contador}</p>

                <button className="card-text m-3 h4" onClick= {increment}>+</button>
            </div>
                <button type="button" class="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount