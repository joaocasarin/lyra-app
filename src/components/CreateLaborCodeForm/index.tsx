import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { z } from 'zod';
import { addLaborCode } from '../../classes/Backend';
import { sxButton, sxInputs } from './Styles';
import './styles.css';

interface PropsType {
    openToast: Function;
}

const LaborCodeForm = ({ openToast }: PropsType) => {
    const [minHourlyWage, setMinHourlyWage] = useState<number>();
    const [maxHoursPerWeek, setMaxHoursPerWeek] = useState<number>();

    const minHourlyWageSchema = z.number().min(1).max(999999999);
    const maxHoursPerWeekSchema = z.number().min(1).max(120);

    const onMinHourlyWageChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setMinHourlyWage(Number(e.currentTarget.value));
    };

    const onMaxHoursPerWeekChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setMaxHoursPerWeek(Number(e.currentTarget.value));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!minHourlyWageSchema.safeParse(minHourlyWage).success) {
            openToast('error', 'Invalid minimum hourly wage, please review your data.');
            return;
        }

        if (!maxHoursPerWeekSchema.safeParse(maxHoursPerWeek).success) {
            openToast('error', 'Invalid maximum hours per week, please review your data.');
            return;
        }

        try {
            addLaborCode(minHourlyWage!, maxHoursPerWeek!);
            openToast('success', 'Labor Code created successfully.');
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
                    id="minHourlyWage"
                    label="Min Hourly Wage"
                    size="small"
                    sx={sxInputs}
                    onChange={onMinHourlyWageChange}
                />

                <TextField
                    required
                    id="maxHoursPerWeek"
                    label="Max Hours Per Week"
                    size="small"
                    sx={sxInputs}
                    onChange={onMaxHoursPerWeekChange}
                />

                <Button type="submit" sx={sxButton} variant="contained">
                    Create New Labor Code
                </Button>
            </Box>
        </form>
    );
};

export default LaborCodeForm;
