import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Spinner from "./Spinner";


const ItemListContainer = () => {

    //Esta funcion se encarga de realizar la peticion a firestore y del montaje de ItemDetail

    const [prodlist, setprodlist] = useState([]);
    const {id} = useParams();
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const prodCollection = collection(db, "products");

        const q = id ? query(prodCollection, where("category", "==", id)) : prodCollection;
        
        getDocs(q).then((snapShot) => {
            setprodlist(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setSpinner(false);
        });
    }, [id]);

    return (
        <div>
            <h1 className="my-5 m-3 text-light">Productos</h1>
            {spinner ? <Spinner /> : <ItemList prodlist={prodlist}/>}
        </div>
    )
}

export default ItemListContainer;
