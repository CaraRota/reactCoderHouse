import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("../../datos.json")
                const item = response.data.find((producto) => producto.id === parseInt(id))
                setProducto(item)
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
}

export default ItemDetailContainer;