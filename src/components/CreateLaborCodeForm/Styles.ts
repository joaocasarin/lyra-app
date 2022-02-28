import { Theme } from '@mui/material';

export const sxInputs = (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
        width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%'
    }
});

export const sxButton = (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
        width: '90%',
        'font-size': '0.8rem'
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%',
        'font-size': '0.6rem'
    }
});
