import React, { useState } from 'react';
import { Button, Box, TextField } from '@mui/material/';
import '../../css/CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [errors, setErrors] = useState({});

    const handleConfirm = (e) => {
        e.preventDefault();

        const validationErrors = {}

        if (nombre.length < 3) {
            validationErrors.nombre = "El nombre debe tener al menos 3 caracteres"
        }
        if (apellido.length < 3) {
            validationErrors.apellido = "El apellido debe tener al menos 3 caracteres"
        }
        if (!email) {
            validationErrors.email = "El campo Email es obligatorio"
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            validationErrors.email = "El formato del email es incorrecto"
        }
        if (!telefono) {
            validationErrors.telefono = "El campo Telefono es obligatorio"
        } else if (!/^\d+$/.test(telefono)) {
            validationErrors.telefono = "El campo Telefono solo acepta numeros"
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const userData = {
            nombre,
            apellido,
            email,
            telefono,
        };
        onConfirm(userData);
    };

    return (
        <main>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleConfirm}
            >
                <div className="form-container">
                    <div className="form-field">
                        <TextField
                            fullWidth
                            required
                            id="nombre"
                            label="Nombre"
                            variant="outlined"
                            value={nombre}
                            onChange={({ target }) => setNombre(target.value)}
                            error={!!errors.nombre}
                            helperText={errors.nombre}
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            fullWidth
                            required
                            id="apellido"
                            label="Apellido"
                            variant="outlined"
                            value={apellido}
                            onChange={({ target }) => setApellido(target.value)}
                            error={!!errors.apellido}
                            helperText={errors.apellido}
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            fullWidth
                            required
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            fullWidth
                            required
                            id="telefono"
                            label="Telefono"
                            variant="outlined"
                            value={telefono}
                            onChange={({ target }) => setTelefono(target.value)}
                            error={!!errors.telefono}
                            helperText={errors.telefono}
                        />
                    </div>
                    <div className="form-field-btns">
                        <Button sx={{ margin: 1 }} variant="contained" type="submit">
                            Enviar
                        </Button>
                        <Button
                            sx={{ margin: 1 }}
                            variant="contained"
                            onClick={() => {
                                setNombre('');
                                setApellido('');
                                setEmail('');
                                setTelefono('');
                                setErrors({});
                            }}
                        >
                            Borrar
                        </Button>
                    </div>
                </div>
            </Box>
        </main>
    )
}

export default CheckoutForm