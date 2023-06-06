import * as React from 'react';
import "../../css/ItemList.css"
import Item from './Item';

function ItemList({ productos }) {
    return (
        <>
            <section>
                {productos?.map((product) => (
                    <ul className='cards' key={product.id}>
                        <Item
                            id={product.id}
                            nombre={product.nombre}
                            descripcion={product.descripcion}
                            precio={product.precio}
                            stock={product.stock}
                            categoria={product.categoria}
                            imagen={product.imagen}
                            currency={"USD"}
                        />
                    </ul>
                ))}
            </section>
        </>
    )
}

export default ItemList