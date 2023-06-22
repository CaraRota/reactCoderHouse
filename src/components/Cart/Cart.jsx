import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import "../../css/Cart.css"

const Cart = () => {
    return (
        <>
            <main>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <div className='form-field'>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                        </div>
                        <div className='form-field'>
                            <TextField id="outlined-basic" label="Apellido" variant="outlined" />
                        </div>
                        <div className='form-field'>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                        <div className='form-field'>
                            <TextField id="outlined-basic" label="Telefono" variant="outlined" />
                        </div>
                        <div className='form-field-btns'>
                            <Button sx={{ margin: 1 }} variant="contained">Enviar</Button>
                            <Button sx={{ margin: 1 }} variant="contained">Borrar</Button>
                        </div>
                    </div>
                </Box>
            </main>
        </>
    )
}

export default Cart