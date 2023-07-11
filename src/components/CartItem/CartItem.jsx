import React, { useContext } from 'react'
import "../../css/CartItem.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { CartContext } from '../../Context/CartContext';

const CartItem = () => {
    const { cart, removeItem } = useContext(CartContext)
    return (
        <>
            <div className='cart-text'>Carrito
            </div>
            <TableContainer sx={{ maxWidth: 750, margin: "auto" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>Descripcion</TableCell>
                            <TableCell sx={{ fontWeight: 700 }} align="right">Cantidad</TableCell>
                            <TableCell sx={{ fontWeight: 700 }} align="right">Precio u.</TableCell>
                            <TableCell sx={{ fontWeight: 700 }} align="right">Subtotal</TableCell>
                            <TableCell sx={{ fontWeight: 700 }} align="right">Eliminar</TableCell>
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
                                <TableCell align="right">{item.precio.toLocaleString("es-AR")} USD</TableCell>
                                <TableCell align="right">{(item.qty * item.precio).toLocaleString("es-AR")} USD</TableCell>
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