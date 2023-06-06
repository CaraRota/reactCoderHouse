import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

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

    return (
        <>
            {greeting}
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer;
