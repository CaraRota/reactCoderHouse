import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("../../datos.json")
                setProductos(response.data)
            }
            catch (error) {
                console.log("Error", error)
            }
            fetchData()
        }
    }, [])

    return (
        <>
            <ItemDetail producto={productos.find(producto => producto.id === id)} />
        </>
    );
}

export default ItemDetailContainer;