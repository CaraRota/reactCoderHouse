import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({ cantidades }) {
    return (
        <>
            <IconButton aria-label="cart">
                <Badge badgeContent={cantidades} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );
}

export default CartWidget;