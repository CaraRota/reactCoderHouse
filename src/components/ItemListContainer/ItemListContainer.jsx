import React, { useState, useEffect } from 'react'
import Loader from "../Loader/Loader"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const collectionRef = categoryId
                    ? query(collection(db, "productos"), where("categoria", "==", categoryId))
                    : collection(db, "productos");

                const response = await getDocs(collectionRef);
                const getProducts = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(getProducts);
            } catch (error) {
                console.log("Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <>
            {greeting}
            {loading ? <Loader />
                : categoryId ? <ItemList productos={productos} categoria={<h2 className='category-title'>Categoria: {categoryId}</h2 >} />
                    : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer;
