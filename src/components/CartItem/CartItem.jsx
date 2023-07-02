import React, { useContext } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { CartContext } from '../../Context/CartContext';
import "../../css/CartItem.css"

const CartItem = () => {
    const { cart, removeItem } = useContext(CartContext)
    return (
        <>
            <div className='cart-text'>Carrito</div>
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Precio u.</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.nombre}
                                </TableCell>
                                <TableCell align="right">{item.qty}</TableCell>
                                <TableCell align="right">${item.precio.toLocaleString("es-AR")}</TableCell>
                                <TableCell align="right">${(item.qty * item.precio).toLocaleString("es-AR")}</TableCell>
                                <TableCell onClick={() => removeItem(item.id)} align="right"><DeleteForeverIcon className='removeItem' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CartItem