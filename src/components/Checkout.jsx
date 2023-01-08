import React, { useContext , useState} from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {

    const {cart, clear, sumTotal} = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generateOrder = () => {

        //Esta funcion va a validar los inputs del formulario y luego generar la orden a la vez que vacia el carrito

        const fecha = new Date();

        //validacion de nombre

        function testnuminstr(str){
            return /\d/.test(str);
        };
    
        //validacion de celular
    
        let regExp = /[a-zA-Z]/g;
    
        //validar mail
    
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
    
        //validacion de datos erroneos o vacios
    
        if (testnuminstr(name) === true || regExp.test(phone) === true || validateEmail(email) === false){
            return (
                alert("Por favor, ingrese los datos correctamente")
            );
        } else if(name === "" || phone === "" || email === ""){
            return (
                alert("Por favor, no deje campos vacios")
            );
        };

        const order = {
            buyer: {name:name, phone:phone, email:email},
            items: cart.map(item => ({id:item.id, title:item.name, quantity:item.quantity, price:item.price, price_total:item.quantity * item.price})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear()
        })

    };

    //montaje del formulario y el detalle de la compra
    
    return (
    <div className="container-fluid checkout">
        <div className="my-5 text-light">
            <h4>Datos a completar</h4>
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Celular:</label>
                        <input type="number" className="form-control" id="phone" placeholder="Ingrese su Teléfono" onInput={(e) => {setPhone(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <button type="button" className="btn btn-danger" onClick={generateOrder}>Siguiente</button>
                </form>
            </div>
            <div className="col-md-6 my-5">
                <h4>Detalle de la compra</h4>
                <table className="table text-light">                                
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.nombre} width={80} /></td>
                                <td className="align-middle">{item.name}</td>
                                <td className="align-middle text-end">{item.quantity}</td>
                                <td className="align-middle text-end">${item.quantity * item.price}</td>
                            </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-end"><b>Total a Pagar</b></td>
                            <td className="text-end"><b>${sumTotal()}</b></td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
            {orderId !== "" ? <Navigate to={"/endofpurchase/" + orderId} /> : ""}
            </div>
        </div>
    </div>
)

};

export default Checkout;

