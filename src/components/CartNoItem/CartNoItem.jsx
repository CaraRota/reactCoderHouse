import { Button, Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import "../../css/CartNoItem.css"

const CartNoItem = () => {
    return (
        <div className='empty-cart'>
            <img src="/assets/empty-cart.png" alt="Empty Cart Image" />
            <div><Alert variant="outlined" severity="error">No hay productos en el carrito</Alert></div>
            <Link to="/" className='back-home-btn'><Button variant='contained' startIcon={<CottageIcon />} >VOLVER</Button></Link>
        </div>
    )
}

export default CartNoItem