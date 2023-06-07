import React from 'react'
import "../../css/ItemDetail.css"
import ItemCount from "./ItemCount"
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, descripcion, precio, stock, categoria, imagen, currency }) => {
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
                            <Typography variant="body2" color="text.secondary">
                                {descripcion}
                                <div>Categoria: {categoria}</div>
                                <div>Stock: {stock}</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className='itemCount'>
                        <ItemCount />
                    </div>
                </Card>
                <CardActions sx={{ justifyContent: "center" }}>
                    {/* Cart aun no esta desarrollado */}
                    <Link to={`/Cart}`} >
                        <Button variant="outlined">Agregar al Carrito</Button>
                    </Link>
                </CardActions>
            </div>
        </>
    )
}

export default ItemDetail