import React, { useState } from 'react'
import { ButtonGroup, Button, CardActions } from '@mui/material'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [amount, setAmount] = useState(initial)

    const agregarItem = () => {
        amount < stock ? setAmount(amount + 1) : null
    }
    const quitarItem = () => {
        amount > 0 ? setAmount(amount - 1) : null
    }

    return (
        <>
            <ButtonGroup variant="contained" aria-label="primary button group" fullWidth>
                <Button
                    onClick={quitarItem}
                    disabled={amount === 0}>
                    -
                </Button>
                <Button variant="outlined" >
                    {amount}
                    </Button>
                <Button 
                onClick={agregarItem}
                disabled={amount === stock}>
                    +
                    </Button>
            </ButtonGroup>
            <CardActions sx={{ justifyContent: "center" }}>
                {/* Cart aun no esta desarrollado */}
                <Button
                    disabled={amount === 0 || stock === 0}
                    onClick={() => onAdd(amount)}
                    variant="outlined">
                    Agregar al Carrito
                </Button>
            </CardActions>
        </>

    )
}

export default ItemCount