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