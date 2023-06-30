import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await new Promise(resolve =>
                    resolve(axios.get("../../datos.json"))
                )
                const item = response.data.find((producto) => producto.id === parseInt(id))
                setProduct(item)
            } catch (error) {
                console.log("Error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

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