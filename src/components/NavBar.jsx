import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Lo de CaraRota
                    </Typography>
                    <Button color="inherit">Espadas</Button>
                    <Button color="inherit">Lanzas</Button>
                    <Button color="inherit">Arcos</Button>
                    <Button color="inherit">Armaduras</Button>
                    <Button color="inherit">Login</Button>
                    <CartWidget cantidades="0" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}