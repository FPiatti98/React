import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {

    //Esta funcion se encarga de realizar la peticion a firestore y del montaje de ItemDetail

    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const prod = doc(db, "products", id);
        getDoc(prod).then((snapShot) => {
            if (snapShot) {
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("el producto no existe");
            }
        });
        setSpinner(false);
    }, [id]);

    return (
        <div className="container">
            {spinner ? <Spinner /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;
