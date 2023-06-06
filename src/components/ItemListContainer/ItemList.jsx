import * as React from 'react';
import "../../css/ItemList.css"
import Item from './Item';

function ItemList({ productos }) {
    return (
        <>
            <ul>
                {productos.map((product) => (
                    <div className='cards' key={product.id}>
                        <Item product={product} />
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ItemList