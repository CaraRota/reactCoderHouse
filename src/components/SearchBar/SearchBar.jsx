import React, { useState, useEffect } from 'react'
import SearchBarDetail from '../SearchBarDetail/SearchBarDetail';
import { TextField } from '@mui/material/';
import "../../css/SearchBar.css"

const SearchBar = ({ productos }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredProducts = productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(value)
        );
        setFilteredProducts(filteredProducts);
    };

    return (
        <>
            <div className="search-bar-container">
                <TextField
                    className='search-bar'
                    label="Buscar Producto (proximamente...)"
                    // onChange={handleInputChange}
                    type='search'
                />
                <SearchBarDetail productos={filteredProducts} />
            </div>
        </>
    )
}

export default SearchBar

{/* <Link to={`/${params.id}`}></Link> */ }