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

const LaborCodeMenu = () => {
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
                id="laborcode-button"
                aria-controls={anchorEl ? 'laborcode-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={sxButton}
            >
                Labor Codes
            </Typography>

            <Menu
                id="laborcode-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        to="/create-labor-code"
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        Create Labor Code
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/list-labor-code" style={{ textDecoration: 'none', color: 'black' }}>
                        Show all Labor Codes
                    </Link>
                </MenuItem>
            </Menu>
        </>
    );
};

export default LaborCodeMenu;
