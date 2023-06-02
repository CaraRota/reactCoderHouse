import React from 'react'
import axios from 'axios'
import ItemList from './ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get("../../datos.json")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
        console.log()
    }, [])

    return (
        <>{greeting}
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;
