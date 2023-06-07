import React from 'react'
import { Menu, MenuItem, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react"
import { Link } from 'react-router-dom';

const NavbarMenu = ({ nombreTienda }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={handleCloseNavMenu}>
                        <ul className='menuListaMobile'>
                            <Link className='link-category' to={`/Category/${"Celulares"}`} >
                                <li className='menuBtn'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Celulares
                                </li>
                            </Link>
                            <Link className='link-category' to={`/Category/${"Tablets"}`} >
                                <li className='menuBtn'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Tablets
                                </li>
                            </Link>
                            <Link className='link-category' to={`/Category/${"Notebooks"}`} >
                                <li className='menuBtn'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Notebooks
                                </li>
                            </Link>
                            <Link className='link-category' to={`/Category/${"Auriculares"}`} >
                                <li className='menuBtn'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Auriculares
                                </li>
                            </Link>
                        </ul>
                    </MenuItem>
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Link className='nombreTiendaMobile' to={"/"}>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            justifyContent: "center",
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        {nombreTienda}
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <ul className='menuLista'>
                    <Link className='link-category' to={`/Category/${"Celulares"}`} >
                        <li className='menuBtn'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Celulares
                        </li>
                    </Link>
                    <Link className='link-category' to={`/Category/${"Tablets"}`} >
                        <li className='menuBtn'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Tablets
                        </li>
                    </Link>
                    <Link className='link-category' to={`/Category/${"Notebooks"}`} >
                        <li className='menuBtn'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Notebooks
                        </li>
                    </Link>
                    <Link className='link-category' to={`/Category/${"Auriculares"}`} >
                        <li className='menuBtn'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Auriculares
                        </li>
                    </Link>
                </ul>
            </Box>
        </>
    )
}

export default NavbarMenu