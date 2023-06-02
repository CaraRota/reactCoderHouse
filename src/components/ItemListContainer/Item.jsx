import React, { useEffect, useState } from 'react'
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Item() {
    let { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        axios("../../../datos.json").then((res) =>
            setItem(res.data[id--])
        )
    }, [id])
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        // image={item.imagen}
                        alt={item.descripcion}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.descripcion}
                        </Typography>
                        <Typography>    
                            {item.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default Item