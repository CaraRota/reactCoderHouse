import * as React from 'react';
import "../../css/ItemList.css"
import Item from '../Item/Item';

const ItemList = ({ productos, categoria }) => {

    return (
        <>
            <div className='itemlist-category'>
                {categoria}
            </div>
            <section>
                {productos?.map((product) => (
                    <ul className={"cards"} key={product.id}>
                        <Item
                            id={product.id}
                            nombre={product.nombre}
                            descripcion={product.descripcion}
                            precio={product.precio}
                            stock={product.stock}
                            imagen={product.imagen}
                            categoria={product.categoria}
                            currency={"USD"}
                        />
                    </ul>
                ))}
            </section>
        </>
    )
}

export default ItemList