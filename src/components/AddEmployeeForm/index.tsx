import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { z } from 'zod';
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

    const fullNameSchema = z.string().min(5).max(50);
    const pidSchema = z.number().min(1).max(999999999);
    const hourlyWageSchema = z.number().min(1).max(120);

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

        if (!fullNameSchema.safeParse(fullName).success) {
            openToast('error', 'Invalid full name, please review your data.');
            return;
        }

        if (!pidSchema.safeParse(pid).success) {
            openToast('error', 'Invalid PID, please review your data.');
            return;
        }

        if (!hourlyWageSchema.safeParse(hourlyWage).success) {
            openToast('error', 'Invalid hourly wage, please review your data.');
            return;
        }

        try {
            addEmployee(pid!, fullName!, hourlyWage!);
            openToast('success', 'Employee registered successfully.');
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
                    id="fullName"
                    required
                    label="Full Name"
                    size="small"
                    sx={sxInputs}
                    onChange={onFullNameChange}
                />

                <TextField
                    id="pid"
                    required
                    label="PID"
                    size="small"
                    sx={sxInputs}
                    onChange={onPidChange}
                />

                <TextField
                    id="hourlyWage"
                    required
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
