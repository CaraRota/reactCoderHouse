import React, { useContext } from 'react'
import "../../css/Cart.css"
import { CartContext } from '../../Context/CartContext'
import { Button, Alert } from '@mui/material/';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CartNoItem from '../CartNoItem/CartNoItem';
import DeleteIcon from '@mui/icons-material/Delete';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart = () => {
    const { cart, removeAll, total } = useContext(CartContext)

    if (!cart.length) {
        return (
            <CartNoItem />
        )
    }

    return (
        <>
            <CartItem />
            <div align="center">
                <Alert className='total-purchase' icon={<ShoppingCartCheckoutIcon fontSize="inherit" />} severity="success">
                    Total de su compra: {total().toLocaleString("es-AR")} USD
                </Alert>
            </div>
            <div className='cart-btns-container'>
                <div className='cart-btns'>
                    <Button onClick={() => removeAll()} variant='contained' color='error' startIcon={<DeleteIcon />}>
                        Eliminar Pedido
                    </Button>
                </div>
                <div className='cart-btns'>
                    <Link to={"/Checkout"}>
                        <Button variant='contained' color='success' endIcon={<TelegramIcon />}>
                            Checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cart