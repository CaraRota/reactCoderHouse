import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material/';
import "../../css/CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            nombre,
            apellido,
            email,
            telefono
        }
        onConfirm(userData)
    }

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
                onSubmit={handleConfirm}
            >
                <div>
                    <div className='form-field'>
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                    </div>
                    <div className='form-field'>
                        <TextField id="outlined-basic" label="Apellido" variant="outlined" value={apellido} onChange={({ target }) => setApellido(target.value)} />
                    </div>
                    <div className='form-field'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </div>
                    <div className='form-field'>
                        <TextField id="outlined-basic" label="Telefono" variant="outlined" value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                    </div>
                    <div className='form-field-btns'>
                        <Button sx={{ margin: 1 }} variant="contained" type='submit'>Enviar</Button>
                        <Button sx={{ margin: 1 }} variant="contained">Borrar</Button>
                    </div>
                </div>
            </Box>
        </main>
    )
}

export default CheckoutForm