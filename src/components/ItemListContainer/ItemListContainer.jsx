import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = axios.get("../../datos.json")
    //             setProductos(response.data)
    //         }
    //         catch (error) {
    //             console.log("Error", error)
    //         }
    //         fetchData()
    //     }
    // }, [])

    useEffect(() => {
        axios
            .get("../../datos.json")
            .then((res) => setProductos(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            {greeting}
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer;
