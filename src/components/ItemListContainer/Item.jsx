import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import AmountBtnBar from "../buttons/AmountBtnBar"

function Item({ product }) {
    const currency = "USD"
    return (
        <>
            <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
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
            <AmountBtnBar />
        </>
    )
}

export default Item