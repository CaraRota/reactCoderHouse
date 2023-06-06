import React from 'react'
import "../../css/ItemDetail.css"
import ItemCount from "./ItemCount"
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function ItemDetail({ id, nombre, descripcion, precio, stock, categoria, imagen, currency }) {
    return (
        <>
            <Card sx={{ width: 600 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imagen}
                        alt={nombre}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {descripcion}
                            <div>Stock: {stock}</div>
                            <div>Precio: {precio} {currency}</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className='itemCount'>
                <ItemCount />
            </div>
            <div>
                <CardActions>
                    {/* Cart aun no esta desarrollado */}
                    <Link className='text-cards' to={`/Cart}`} >
                        <Button variant="outlined">Agregar al Carrito</Button>
                    </Link>
                </CardActions>
            </div>
        </>
    )
}

export default ItemDetail