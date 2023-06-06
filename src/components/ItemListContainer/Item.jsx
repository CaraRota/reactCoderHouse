import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import AmountBtnBar from "../buttons/AmountBtnBar"
import { Link } from 'react-router-dom';
import "../../css/Item.css"

function Item({ product }) {
    const currency = "USD"
    return (
        <>
            <div>
                <Link className='text-cards' to={`/Item/${product.id}`} >
                    <Card>
                        <CardActionArea>
                            <CardMedia className='img-card-1'
                                component="img"
                                height="250"
                                width="250"
                                image={product.imagen}
                                alt={product.nombre}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.precio} {currency}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <AmountBtnBar />
            </div>
        </>
    )
}

export default Item