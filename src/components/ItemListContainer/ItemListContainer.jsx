import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Data from "../../../datos.json"
import Loader from "../Loader/Loader"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    let { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await new Promise(resolve =>
                    setTimeout(() => {
                        resolve(axios.get("../../datos.json"))
                    }, 1000)
                )
                setProductos(response.data)
            } catch (error) {
                console.log("Error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const filtrarCategoria = Data.filter((producto) => producto.categoria === category)

    return (
        <>
            {greeting}
            {loading ? <Loader /> : category ? <ItemList productos={filtrarCategoria} categoria={<h2 className='category-title'>Categoria: {category}</h2 >} /> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer;
