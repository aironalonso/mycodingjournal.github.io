import React, { useState } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const TaskList = (props) => {
    // const [list, updateList] = useState();

    // const removeItem = (event) => {
    //     event.preventDefault();
    //     const newList = list.filter((item) => item.id !== id);

    //     updateList(newList);
    // };

    return (
        <Stack direction='column'>
            {props.tasks.map((item) => (
                <List key={item.id} sx={{
                    bgcolor: 'background.paper',
                }}>
                    <ListItem alignItems="flex-start" sx={{
                    }}>
                        <ListItemText
                            primary={item.title}
                            secondary={item.toDoList}
                        />
                        <Stack direction='row' spacing={1}>
                            {/* <IconButton aria-label='checked'>
                                <CheckCircleRoundedIcon />
                            </IconButton> */}
                            <IconButton aria-label='delete'>
                                <DeleteRoundedIcon />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <Divider variant='fullWidth' />
                </List>
            ))}
        </Stack>
    );
};

export default TaskList;