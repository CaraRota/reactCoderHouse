import * as React from 'react';
import "../../css/ItemList.css"
import { Link } from 'react-router-dom';
import Item from './Item';

function ItemList({ productos }) {
    return (
        <>
            <ul>
                {productos.map((product) => (
                    <div className='cards' key={product.id}>
                        <Link to={`/Item/${product.id}`} >
                            <Item product={product} />
                        </Link>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ItemList