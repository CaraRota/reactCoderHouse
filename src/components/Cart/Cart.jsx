import React, { useContext } from 'react'
import "../../css/Cart.css"
import { CartContext } from '../../Context/CartContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/';

const Cart = () => {
    const { cart, addItem, removeAll, totalQty, total, removeItem } = useContext(CartContext)

    if (totalQty === 0) {
        return <div>No hay productos en el carro</div>
    }
    return (
        <>
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
            <div align="center">Total de su compra: ${total.toLocaleString("es-AR")}</div>
            <div align="center"><Button onClick={() => removeAll()} variant='contained' color='error' >Eliminar Pedido</Button></div>
        </>
    )
}

export default Cart