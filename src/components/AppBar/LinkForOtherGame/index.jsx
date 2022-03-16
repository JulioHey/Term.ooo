import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';


const LinkForOtherGame = (props) => {
    return (
        <Link
            style={{ 
                textDecoration: 'none',
                opacity: props.currentPage === props.children ? 0.25 : 1,
                margin: "0 10px",
                padding: "10px 0",
                pointerEvents:  props.currentPage === props.children ? "none" : "initial",
            }}
            to={`/${props.children === "termo" ? "" : props.children}`}
        >
            <Typography
                variant="h5"
                margin="auto"
                color="#FAFAFF"
                fontWeight={300}
            >
                {props.children}
            </Typography>
            
        </Link> 
    );
}

export default LinkForOtherGame;