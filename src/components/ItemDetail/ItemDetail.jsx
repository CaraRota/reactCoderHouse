import React, { useState, useContext } from 'react'
import "../../css/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({ id, nombre, descripcion, precio, stock, categoria, imagen, currency }) => {

    const [qtyAdded, setQtyAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQtyAdded(cantidad)

        const item = {
            id, nombre, precio
        }
        addItem(item, cantidad)
    };

    return (
        <>
            <div className='card-container'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={imagen}
                            alt={nombre}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {nombre}
                                <div>{precio} {currency}</div>
                            </Typography>
                            <Typography variant="body2" component="div" color="text.secondary">
                                {descripcion}
                                <div>Categoria: {categoria}</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className='itemCount'>
                        {qtyAdded > 0 ? <Link to="/Cart" className='finish-shop'><Button variant='contained'>Terminar Compra</Button></Link>
                            : <ItemCount stock={stock} onAdd={onAdd} initial={1} />
                        }
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "10px" }}>{stock} unidade(s) disponibles</div>
                </Card>
            </div>
        </>
    )
}

export default ItemDetail