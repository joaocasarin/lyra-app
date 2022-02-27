import { Box, Button, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { addEmployee } from '../../classes/Backend';
import { sxButton, sxInputs } from './Styles';
import './styles.css';

interface PropsType {
    openToast: Function;
}

const EmployeeForm = ({ openToast }: PropsType) => {
    const [fullName, setFullName] = useState('');
    const [pid, setPid] = useState<number>();
    const [hourlyWage, setHourlyWage] = useState<number>();

    const onFullNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setFullName(e.currentTarget.value);
    };

    const onPidChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setPid(Number(e.currentTarget.value));
    };

    const onHourlyWageChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setHourlyWage(Number(e.currentTarget.value));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (
                typeof fullName !== 'string' ||
                typeof pid !== 'number' ||
                typeof hourlyWage !== 'number'
            ) {
                throw new Error('Invalid inputs, please review your data.');
            } else {
                addEmployee(pid, fullName, hourlyWage);
                openToast('success', 'Employee registered successfully.');
            }
        } catch (error) {
            openToast('error', (error as Error).message);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
                height="100%"
                className="formWrapper"
            >
                <TextField
                    required
                    id="fullName"
                    label="Full Name"
                    size="small"
                    sx={sxInputs}
                    onChange={onFullNameChange}
                />

                <TextField
                    required
                    id="pid"
                    label="PID"
                    size="small"
                    sx={sxInputs}
                    onChange={onPidChange}
                />

                <TextField
                    required
                    id="hourlyWage"
                    label="Hourly Wage"
                    size="small"
                    sx={sxInputs}
                    onChange={onHourlyWageChange}
                />

                <Button type="submit" sx={sxButton} variant="contained">
                    Register Employee
                </Button>
            </Box>
        </form>
    );
};

export default EmployeeForm;
