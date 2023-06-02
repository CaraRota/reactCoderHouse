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
                            <CardActionArea>
                                <Link to={`/Item/${product.id}`} >
                                    <CardMedia
                                        component="img"
                                        style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain'}}
                                        image={product.imagen}
                                        alt={product.nombre}
                                    />
                                </Link>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.nombre}
                                    </Typography>
                                    <Typography>
                                        {product.precio} {currency}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <AmountBtnBar />
                        </Card>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ItemList