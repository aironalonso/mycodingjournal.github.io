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
    const [list, updateList] = useState();
    
    const removeItem = (event) => {
        event.preventDefault();
    };
    
    return (
        <div>
            {props.tasks.map((item) => (
                <List key={item.id} sx={{
                    bgcolor: 'background.paper',
                    maxWidth: 300,
                    width: '100vh'
                }}>
                    <ListItem alignItems="flex-start" sx={{
                        maxWidth: 300
                    }}>
                        <ListItemText
                            primary={item.title}
                            secondary={item.toDoList}
                        />
                        <Stack direction='row' spacing={1}>
                            {/* <IconButton aria-label='checked'>
                                <CheckCircleRoundedIcon />
                            </IconButton> */}
                            <IconButton aria-label='delete' onClick={removeItem}>
                                <DeleteRoundedIcon />
                            </IconButton>
                        </Stack>
                    </ListItem>
                    <Divider variant='fullWidth' />
                </List>
            ))}
        </div>
    );
};

export default TaskList;