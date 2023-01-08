import React from "react";
import { Link , useParams } from "react-router-dom";


const EndOfPurchase = () => {

    //Esta funcion se encarga de montar un mensaje para el usuario mostrando el id de la compra

    const {id} = useParams();

    return(
        <div className="contenedor-checkout d-flex flex-column align-items-center text-light">
            <div className="row my-4">
                <div className="col text-center">
                    <div>
                        <h2>Pedido realizado!</h2>
                        <p>Tu Número de Orden es: <b>{id}</b></p>
                    </div>
                </div>
            </div>
                <Link to={"/"} className="btn btn-danger m-5">Volver a la Página Principal</Link>    
        </div>
    )
};

export default EndOfPurchase;

