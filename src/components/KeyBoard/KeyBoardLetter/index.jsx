import React,
{
    useMemo
} from 'react';
import {
    Typography,
    Box
} from '@mui/material';

import BackgroundConstructor from './backgroundConstructor';


const KeyBoardLetter = ({
    tries,
    awnsers,
    currentPage,
    children = "A",
    margin = "1px",
}) => {
    const constructBackgrounds = useMemo(() => {

        let backgroundConstructor = new BackgroundConstructor(
            children,
            awnsers,
            tries
        );

        switch (currentPage) {
            case "termo":
                return backgroundConstructor.termoBackgrounds();
            case "dueto":
                return backgroundConstructor.duetoBackgrounds();
            case "quarteto":
                return backgroundConstructor.quartetoBackgrounds();
            default:
                break;
        }
    }, [
        currentPage,
        children,
        tries,
        JSON.stringify(tries),
        awnsers
    ]);

    return (
        <Box
            display="flex"
            m={margin}
            maxHeight="64px"
            style={{
                background: constructBackgrounds
            }}
        >
            <Typography
                color="#FAFAFF"
            >
                {children}
            </Typography>
        </Box>

    );
}


export default KeyBoardLetter