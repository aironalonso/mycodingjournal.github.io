import React from 'react';
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
    return (
        <div>
            {props.tasks.map((item) => (
                <List key={item.id} sx={{
                    bgcolor: 'background.paper',
                    maxWidth: 360,
                    width: '100%'
                }}>
                    <ListItem alignItems="flex-start" >
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
        </div>
    );
};

export default TaskList;