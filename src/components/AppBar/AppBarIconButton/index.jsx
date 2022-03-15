import { Container, IconButton } from '@mui/material';
import React from 'react';

const AppBarIconButton = (props) => {
    return (
        <IconButton
            size="medium"
            edge="start"
            color="info"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={() => props.onClick()}
            >
            <Container
                classes={{root: props.style}}
            >
                {props.children}
            </Container>
        </IconButton>
    );
}

export default AppBarIconButton;