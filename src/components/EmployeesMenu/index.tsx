import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, SxProps, Typography } from '@mui/material';

const sxButton: SxProps = {
    fontFamily: "'Mukta', sans-serif",
    fontSize: '1.1rem',
    cursor: 'pointer',
    transitionDuration: '0.4s',
    '&:hover': {
        color: 'black'
    }
};

const EmployeesMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Typography
                variant="h6"
                id="employee-button"
                aria-controls={anchorEl ? 'employee-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={sxButton}
            >
                Employees
            </Typography>
            <Menu
                id="employee-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/create-employee" style={{ textDecoration: 'none', color: 'black' }}>
                        Register Employee
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        to="/calculate-employee-salary"
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        Calculate Salary
                    </Link>
                </MenuItem>
            </Menu>
        </>
    );
};

export default EmployeesMenu;
