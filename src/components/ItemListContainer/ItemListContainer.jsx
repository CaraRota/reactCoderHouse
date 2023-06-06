import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    let { category } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("../../datos.json")
                setProductos(response.data)
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        fetchData()
    }, [])

    const filtrarCategoria = productos.filter((producto) => producto.category === category)

    return (
        <>
            {greeting}
            {category ? <ItemList productos={filtrarCategoria} /> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer;
