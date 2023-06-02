import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidget from "./CartWidget"
import NavBarMenu from './NavBarMenu';
import "../../css/NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const nombreTienda = "Samsung";
    const categorias = ['Celulares', 'Auriculares', 'Notebooks', 'Tablets'];

    return (
        <nav>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link className='nombreTienda' to={"/"}>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {nombreTienda}
                            </Typography>
                        </Link>
                        <NavBarMenu categorias={categorias} nombreTienda={nombreTienda} />
                        <Box sx={{ flexGrow: 0 }}>
                            <CartWidget cantidades="0" />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav >
    );
}
export default NavBar;