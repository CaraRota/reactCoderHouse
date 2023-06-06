import React from 'react'
import { useParams } from 'react-router-dom'
import "../../css/ItemDetail.css"

function ItemDetail({ producto }) {
    let { id } = useParams()

    return (
        <div key={id} className='container-producto'>
            <div className='producto-descripcion'>{producto.descripcion}</div>
        </div>
    )
}

export default ItemDetail