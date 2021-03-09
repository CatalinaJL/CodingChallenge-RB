import React from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText } from '@material-ui/core';
import './Components.css';

export const Sidebar = () =>{
    return(
        <div className="sidebar">
        <List disablePadding dense>
            <Link to="/" className="buttonSidebar">
            <ListItem button>
                <ListItemText>
                    All
                </ListItemText>
            </ListItem>
            </Link>
            <ListItem button disabled={true}>
                <ListItemText>
                    Templates
                </ListItemText>
            </ListItem>
            <Link to="/SocialInnovation" className="buttonSidebar">
            <ListItem button>
                <ListItemText style={{marginLeft:5}}>
                    Social Innovation
                </ListItemText>
            </ListItem>
            </Link>
        </List>

        </div>
       
    )
}

