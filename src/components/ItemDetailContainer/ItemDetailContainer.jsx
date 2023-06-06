import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("../../datos.json")
                const item = response.data.find((producto) => producto.id === parseInt(id))
                setProduct(item)
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            <div key={id} className='container-producto'>
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
            </div>
        </>
    );
}

export default ItemDetailContainer;