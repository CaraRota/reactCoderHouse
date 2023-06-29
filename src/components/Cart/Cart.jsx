import React, { useContext } from 'react'
import "../../css/Cart.css"
import { CartContext } from '../../Context/CartContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/';

const Cart = () => {
    const { cart, addItem, removeAll, totalQty, total } = useContext(CartContext)

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
                        {cart.map((cartt) => (
                            <TableRow
                                key={cartt.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {cartt.nombre}
                                </TableCell>
                                <TableCell align="right">{cartt.qty}</TableCell>
                                <TableCell align="right">${cartt.precio.toLocaleString("es-AR")}</TableCell>
                                <TableCell align="right">${(cartt.qty * cartt.precio).toLocaleString("es-AR")}</TableCell>
                                <TableCell align="right"><DeleteForeverIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={() => removeAll()} variant='contained' color='error' >Eliminar Pedido</Button>
                <TableCell align="right">Total de su compra: ${total.toLocaleString("es-AR")}</TableCell>
            </TableContainer>
        </>
    )
}

export default Cart