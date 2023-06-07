import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Data from "../../../datos.json"
import ItemList from '../ItemList/ItemList';
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

    const filtrarCategoria = Data.filter((producto) => producto.categoria === category)

    return (
        <>
            {greeting}
            {category ? <ItemList productos={filtrarCategoria} categoria={<h2 className='category-title'>Categoria: {category}</h2>} /> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer;
