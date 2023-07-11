import React from 'react'

const SearchBarDetail = ({ productos }) => {
    return (
        <>
            <div className="search-bar-detail-container">
                {productos.map((producto) => (
                    <div className="search-bar-detail" key={producto.id}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <p>{producto.nombre}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchBarDetail