import { Button, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
import "../../css/Item.css"

const Item = ({ id, nombre, precio, stock, imagen, currency }) => {
    const cuotas = 6;

    return (
        <>
            <div>
                <Card>
                    <CardActionArea className='item-card-area'>
                        <CardMedia className='img-card-1'
                            component="img"
                            image={imagen}
                            alt={nombre}
                        />
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