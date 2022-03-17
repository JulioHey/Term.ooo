import React from "react";

import { makeStyles } from "@mui/styles";
import { Container, Dialog } from "@mui/material";

const useStyles = makeStyles((theme) => {
    return {
        container: {
            maxWidth: "800px !important",
            width: "100%",
            overflow: "auto",
            backgroundColor: theme.palette.secondary.dark,
            padding: "32.4px"
        },
        dialogContainer: {
            backgroundColor: "none !important"
        },
    }
});

const PopupContainer = (props) => {
    const classes = useStyles();

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            maxWidth={false}
            PaperProps={{
                classes: {
                    root: classes.dialogContainer  
                }
            }}
        >
            <Container
                classes={{
                    root: classes.container
                }}
            >
                {props.children}
            </Container>
        </Dialog>
    )
}


export default PopupContainer;