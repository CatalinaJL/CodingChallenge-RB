import React from 'react';
import {Button} from '@material-ui/core';

export const Bottom = () =>{
    return(
        <div className="bottom">
            <Button variant="contained">Cancel</Button>
            <Button variant="contained" color="primary" disableElevation>use this builder schedule</Button>
        </div>
    )
};