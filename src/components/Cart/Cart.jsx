import React, { useContext } from 'react'
import "../../css/Cart.css"
import { CartContext } from '../../Context/CartContext'
import { Button } from '@mui/material/';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, removeAll, total } = useContext(CartContext)
    // let total = cart.reduce((acc, prod) => (acc += prod.precio * prod.qty), 0);

    if (!cart.length) {
        return (
            <div className='empty-cart'>
                <img src="./assets/empty-cart.png" alt="Empty Cart Image" />
                No hay productos en el carrito
            </div>
        )
    }

    return (
        <>
            <CartItem />
            <div align="center">Total de su compra: ${total().toLocaleString("es-AR")}</div>
            <div align="center"><Button onClick={() => removeAll()} variant='contained' color='error' >Eliminar Pedido</Button></div>
        </>
    )
}

export default Cart