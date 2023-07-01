import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const docRef = doc(db, "productos", id);
                const response = await getDoc(docRef);
                const data = response.data();
                const getProducts = { id: response.id, ...data };
                setProduct(getProducts);
            } catch (error) {
                console.log("Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            {loading ? <Loader /> : <div key={id} className='container-producto'>
                <ItemDetail
                    id={product.id}
                    nombre={product.nombre}
                    descripcion={product.descripcion}
                    precio={product.precio}
                    stock={product.stock}
                    categoria={product.categoria}
                    imagen={product.imagen}
                    currency={"USD"}
                />
            </div>}

        </>
    );
}

export default ItemDetailContainer;