import * as React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import "../../css/ItemList.css"
import { Link } from 'react-router-dom';
import AmountBtnBar from '../buttons/AmountBtnBar';

function ItemList({ products }) {
    const currency = "USD"
    return (
        <>
            <ul>
                {products.map((product) => (
                    <div className='cards' key={product.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Link to={`/Item/${product.id}`} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.imagen}
                                        alt={product.descripcion}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.nombre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.descripcion}
                                        </Typography>
                                        <Typography>
                                            {product.precio} {currency}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <AmountBtnBar />
                        </Card>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ItemList