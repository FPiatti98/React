import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //Esta funcion se fija si el item ya esta en el carrito

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    };

    //esta funcion agrega el item al carrito si la funcion isInCart devuelve false, en el caso contrario le agrega la cantidad seleccionada

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    };

    //Esta funcion remueve el item del carrito filtrando por el id y buscando la coincidencia

    const removeItem = (id) => {
        const productosneo = cart.filter(x => x.id !== id);
        setCart([...productosneo]);
    };

    //Esta funcion vacia el carrito usando el useState

    const clear = () => {
        setCart([]);
    };

    //Esta funcion devuelve la cantidad de items en el carrito

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    //Esta funcion devuelve el precio total de la compra

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price, 0);
    }

    //montaje

    return( 
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
