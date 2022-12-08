import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/prodlist";
import { promesa } from "../data/promise";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setitem] = useState("");
    const {id} = useParams();

    useEffect(() => {
        promesa(products.find(item => item.id === parseInt(id)))
            .then(res => {
                setitem(res)
            })
    }, [id])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
