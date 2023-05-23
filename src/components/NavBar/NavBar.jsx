import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidget from "./CartWidget"
import NavBarMenu from './NavBarMenu';
import "../../css/NavBar.css"

function NavBar() {
    const nombreTienda = "Lo de CaraRota";
    const categorias = ['Espadas', 'Lanzas', 'Arcos', 'Armaduras'];

    return (
        <nav>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {nombreTienda}
                        </Typography>
                        <NavBarMenu categorias={categorias} nombreTienda={nombreTienda}>
                        </NavBarMenu>
                        <Box sx={{ flexGrow: 0 }}>
                            <CartWidget cantidades="0" />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}
export default NavBar;