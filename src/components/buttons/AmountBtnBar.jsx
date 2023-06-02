import React, { useState } from 'react'
import { ButtonGroup, Button } from '@mui/material'
import "../../css/AmountBtnBar.css"

function AmountBtnBar() {
    const [amount, setAmount] = useState(0)

    const agregarItem = () => {
        setAmount(amount + 1)
    }
    const quitarItem = () => {
        amount > 0 ? setAmount(amount - 1) : null
    }

    return (
        <ButtonGroup variant="contained" aria-label="primary button group" fullWidth>
            <Button onClick={quitarItem}>-</Button>
            <Button variant="outlined" className='amount-btn'>{amount}</Button>
            <Button onClick={agregarItem}>+</Button>
        </ButtonGroup>
    )
}

export default AmountBtnBar