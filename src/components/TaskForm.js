import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TaskList from './TaskList';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const taskInfo = (localStorage.getItem('taskDetails')) ? JSON.parse(localStorage.getItem('taskDetails')) : [];

// const useStyles = makeStyles({
//     container: {
//         backgroundColor: 'blue'
//     }
// });

const TaskForm = () => {
    const [taskList, setTaskList] = useState(taskInfo);

    const titleRef = useRef();
    const toDoListRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const taskObject = {
            id: Date.now(),
            title: titleRef.current.value,
            toDoList: toDoListRef.current.value
        };
        console.log(taskObject);

        setTaskList([...taskList, taskObject]);

        localStorage.setItem('taskDetails', JSON.stringify(taskList));

        titleRef.current.value = '';
        toDoListRef.current.value = '';
    };

    // const [value, setValue] = React.useState();

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    // const classes = useStyles();

    return (
        <div>
            <Container component='main' maxWidth='xs' sx={{
                border: 1,
                borderColor: 'grey.500',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
                py: 4
            }}>
                <CssBaseline>
                    <Box>
                        <Typography align='center' gutterBottom variant='h4'>My Coding Journal</Typography>
                        <Grid container>
                            <FormControl component='form' fullWidth onSubmit={onFormSubmit}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="standard-multiline-flexible"
                                        label="Title"
                                        multiline
                                        maxRows={4}
                                        defaultValue=''
                                        // value={value}
                                        // onChange={handleChange}
                                        variant="standard"
                                        inputRef={titleRef}
                                        margin='normal'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="standard-multiline-static"
                                        label="To-Do-List"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        variant="standard"
                                        inputRef={toDoListRef}
                                        margin='normal'
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button color='success' variant='contained' type='submit'>Confirm</Button>
                                </Grid>
                            </FormControl>
                            <TaskList tasks={taskList} />
                        </Grid>
                    </Box>
                </CssBaseline>
            </Container>

        </div>
    );
};

export default TaskForm;