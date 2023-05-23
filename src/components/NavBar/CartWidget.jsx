import React from 'react';
import { ShoppingCart } from '@mui/icons-material';

function CartWidget({ cantidades }) {
    return (
        <>
            <ShoppingCart />
            {cantidades}
        </>
    );
}

export default CartWidget;