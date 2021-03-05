import React from 'react';
import {List, ListItem, ListItemText } from '@material-ui/core';

export const Sidebar = () =>{
    return(
        <div className="sidebar">
                 <List disablePadding dense>
            <ListItem button>
                <ListItemText>
                    All
                </ListItemText>
            </ListItem>
            <ListItem button disabled={true}>
                <ListItemText>
                    Templates
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText style={{marginLeft:5}}>
                    Social Innovation
                </ListItemText>
            </ListItem>
        </List>

        </div>
       
    )
}

