import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/prodlist";
import { promesa } from "../data/promise";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [prodlist, setprodlist] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        promesa(id ? products.filter(product => product.category === id) : products)
            .then(res => {
                setprodlist(res)
            })
    }, [id]) 

    return (
        <div>
            <h1>Todos los productos</h1>
            <ItemList prodlist={prodlist}/>
        </div>
    )
}

export default ItemListContainer;
