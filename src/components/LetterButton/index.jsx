import React, { useMemo } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Button, 
    Typography,
    Box
} from '@mui/material';

const useStyles = makeStyles(theme => ({
    letter: {
        fontSize: "24px"
    },
}));

const LetterButton = ({
    children = "A", 
    padding = "10px 0", 
    margin = "3px 6px",
    status = "none",
    variant = "h5",
}) => {
    const classes = useStyles();

    const bgColor = useMemo(() => {
        if (status === "none") {
            return "";
        } else if (status === "success") {
            return "#3aa394";
        } else if (status === "error") {
            return "#191516"
        } else {
            return "#d3ad69"
        }
    }, [
        status,
    ]);

    return (
        <Box
            m={margin}
            maxHeight="64px"
        >
            <Button
                style={{
                    borderRadius: "8px",
                    backgroundColor: bgColor
                }}
                variant='contained'            
                size='medium'
            >
                <Typography 
                    variant={variant}
                    classes={{
                        root: classes.letter
                    }}
                    p={padding}
                >
                    {children}
                </Typography>
            </Button>      
        </Box>

    );
}


export default LetterButton