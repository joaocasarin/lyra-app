import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CreateEmployee from './pages/CreateEmployee';
import Home from './pages/Home';
import CreateLaborCode from './pages/CreateLaborCode';

const App = () => (
    <Box height="100vh" width="100vw" bgcolor="#2d81ef" display="flex" flexDirection="column">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-employee" element={<CreateEmployee />} />
            <Route path="/create-labor-code" element={<CreateLaborCode />} />
        </Routes>
    </Box>
);

export default App;
