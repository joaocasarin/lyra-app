/* eslint-disable react/jsx-props-no-spreading */
import { Box, Snackbar, Alert as MuiAlert, AlertColor } from '@mui/material';
import React, { useState, SyntheticEvent } from 'react';
import LaborCodeForm from '../../components/CreateLaborCodeForm';
import './styles.css';

const CreateLaborCode = () => {
    const [isOpenToast, setIsOpenToast] = useState(false);
    const [toast, setToast] = useState<null | 'error' | 'success'>();
    const [toastMessage, setToastMessage] = useState('');

    const openToast = (toastType: 'error' | 'success', message: string) => {
        setToast(toastType);
        setToastMessage(message);
        setIsOpenToast(true);
    };

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpenToast(false);
    };

    return (
        <Box
            bgcolor="white"
            borderRadius="15px"
            height="55%"
            minWidth="40%"
            marginX="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="formContainer"
        >
            <h1 className="formTitle">Create Labor Code</h1>

            <LaborCodeForm openToast={openToast} />

            <Snackbar open={isOpenToast} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    severity={toast as AlertColor}
                >
                    {toastMessage}
                </MuiAlert>
            </Snackbar>
        </Box>
    );
};

export default CreateLaborCode;
