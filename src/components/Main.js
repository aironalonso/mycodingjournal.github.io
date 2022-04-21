import React from 'react';
import Task from './Task';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Main = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <Task />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Main;