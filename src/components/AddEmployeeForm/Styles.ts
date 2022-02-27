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
        fontSize: '0.8rem'
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%',
        fontSize: '0.6rem'
    }
});
