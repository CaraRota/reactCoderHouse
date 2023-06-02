import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useRadioGroup } from '@mui/material';
import "../../css/ItemList.css"
import { Link } from 'react-router-dom';

function ItemList({ products }) {
    const currency = "USD"
    return (
        <>
            <ul>
                {products.map((product) => (
                    <div className='cards' key={product.id}>
                        <Link to={`/Item/${product.id}`} >
                            <Card sx={{ maxWidth: 345 }}>
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
                            </Card>
                        </Link>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ItemList