import React from 'react'
import "../../css/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';

const ItemDetail = ({ id, nombre, descripcion, precio, stock, categoria, imagen, currency }) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} item(s)`);
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
                                <div>Stock: {stock}</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className='itemCount'>
                        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ItemDetail