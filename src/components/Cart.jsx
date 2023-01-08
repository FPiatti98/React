import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext);

    //Esta condicion evalua si el carrito esta vacio o no
    //Si este mismo esta vacio procede a montar un mensaje
    //En el caso contrario hace el montaje de todos los items que hay en el carrito y del boton finalizar compra

    if (cartTotal() === 0) {
        return(
            <div className="container w-80">
                <div className="row">
                    <div className="col-md-12">
                       <div className= "alert alert-danger" role="alert">El carrito esta vacio 😥</div>
                       <Link to={"/"}>
                            <button className="btn btn-success">Volver a la pagina principal</button>
                       </Link>
                    </div>
                </div>
            </div>
        )
    } else {

        return(
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <table class="table text-light">
                            <thead>
                                <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col"><b>Producto</b></th>
                                <th scope="col"><b>Cantidad</b></th>
                                <th scope="col"><b>Precio</b></th>
                                <th scope="col" className="align-middle"><button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={100} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">{item.quantity * item.price}</td>
                                        <td className="align-middle"><button className="my-5 btn btn-danger" onClick={() => {removeItem(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Precio Final</b></td>
                                    <td>${sumTotal()}</td>
                                    <td><Link to={"/checkout"} className="btn btn-success">Finalizar Compra</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
};

export default Cart;
