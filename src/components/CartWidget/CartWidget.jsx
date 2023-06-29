import React, { useContext } from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
    const { totalQty } = useContext(CartContext)

    return (
        <>
            <IconButton aria-label="cart">
                <Badge badgeContent={totalQty} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );
}

export default CartWidget;