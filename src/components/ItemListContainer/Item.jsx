import { Button, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../css/Item.css"

function Item({ id, nombre, descripcion, precio, stock, categoria, imagen, currency }) {
    return (
        <>
            <div>
                <Card>
                    <CardActionArea>
                        <CardMedia className='img-card-1'
                            component="img"
                            height="250"
                            width="250"
                            image={imagen}
                            alt={nombre}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {precio} {currency}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Link className='text-cards' to={`/Item/${id}`} >
                        <Button variant="outlined">Ver Detalle</Button>
                    </Link>
                </Card>
            </div>
        </>
    )
}

export default Item