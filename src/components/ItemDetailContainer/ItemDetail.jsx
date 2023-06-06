import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail({ producto }) {
    let { id } = useParams()
    return (
        <div key={id}>{producto.descripcion}</div>
    )
}

export default ItemDetail