import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
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
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Stack direction='column' sx={{
                alignContent: 'space-between',
                alignItems: 'center',
                border: 1,
                borderColor: 'grey.500',
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'center',
                my: 2,
                py: 4,
                width: {xs: '96%', md: '50%'}
            }}>
                <Typography align='center' gutterBottom variant='h4' sx={{
                    width: {xs: '70%', md: '100%'}
                }}>My Coding Journal</Typography>
                <FormControl component='form' fullWidth onSubmit={onFormSubmit} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '70%'
                }}>
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
                    <Button color='success' variant='contained' type='submit' sx={{ my: 2 }}>Confirm</Button>
                </FormControl>
                <Stack  sx={{ my: 2, width: '70%' }}>
                    <TaskList tasks={taskList} />
                </Stack>
            </Stack>
        </Box>
    );
};

export default TaskForm;