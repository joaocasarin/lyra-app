import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import LogoSvg from './LogoSvg';
import EmployeesMenu from '../EmployeesMenu';
import LaborCodeMenu from '../LaborCodeMenu';

const Header = () => (
    <AppBar
        sx={{
            height: 100,
            position: 'initial',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#2d81ef',
            boxShadow: 'none'
        }}
    >
        <Container maxWidth="lg">
            <Toolbar>
                <Link to="/">
                    <LogoSvg />
                </Link>

                <Box
                    sx={{
                        ml: 20,
                        width: '600px',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <EmployeesMenu />
                    <LaborCodeMenu />
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
