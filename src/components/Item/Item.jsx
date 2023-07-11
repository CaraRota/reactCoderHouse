import * as React from 'react';
import { useEffect, useState } from 'react';
import { Skeleton, Button, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
import "../../css/Item.css"

const Item = ({ id, nombre, precio, stock, imagen, currency }) => {
    const cuotas = 6;
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = imagen;
        imageLoader.onload = () => {
            setLoading(false);
        };
    }, [imagen]);

    return (
        <>
            <div>
                <Card>
                    <CardActionArea className='item-card-area'>
                        {loading ? <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rounded" width={250} height={250} />
                            : stock < 1 ?
                                <div className='no-stock-img'>
                                    <CardMedia className='img-card-1'
                                        component="img"
                                        image={imagen}
                                        alt={nombre}
                                    />
                                </div>
                                : <Link to={`/Item/${id}`}>
                                    <CardMedia className='img-card-1'
                                        component="img"
                                        image={imagen}
                                        alt={nombre}
                                    />
                                </Link>
                        }
                        <CardContent>
                            <Typography variant="h5">
                                {precio.toLocaleString("es-AR")} {currency}
                            </Typography>
                            <Typography gutterBottom variant="body1" color="text.secondary" component="div">
                                {nombre}
                            </Typography>
                            <Typography gutterBottom className='discount-item' variant="body3" component="div">
                                <DiscountIcon fontSize='small' /> {cuotas}x {(precio / cuotas).toFixed(2)} USD
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {stock < 1 ? <Button sx={{ mb: 2 }} className='no-stock-item' variant="outlined" color="error">Sin Stock</Button>
                        : <Link to={`/Item/${id}`}><Button sx={{ mb: 2 }} variant="outlined">Ver Detalle</Button></Link>
                    }
                </Card>
            </div>
        </>
    )
}

export default Item