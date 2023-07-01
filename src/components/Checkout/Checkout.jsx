import React from 'react'
import { Button, Box, TextField } from '@mui/material/';


const Checkout = () => {
    return (
        <main>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
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
    )
}

export default Checkout