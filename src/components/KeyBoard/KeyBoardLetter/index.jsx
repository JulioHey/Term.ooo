import React,
{
    useMemo
} from 'react';
import {
    Typography,
    Box
} from '@mui/material';

import BackgroundConstructor from './backgroundConstructor';
import { useGameContext } from '../../../contexts/gameContext';


const KeyBoardLetter = ({
    children = "A",
    margin = "2px 2px",
    width = "20px",
    height = "20px",
    fontSize = "24px"
}) => {
    const [state, actions] = useGameContext();

    const constructBackgrounds = useMemo(() => {
        let backgroundConstructor = new BackgroundConstructor(
            children,
            state.awnsers,
            state.tries
        );

        switch (state.currentPage) {
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
        state.currentPage,
        children,
        state.currentTry,
        state.awnsers,
        state.tries
    ]);

    return (
        <Box
            display="flex"
            m={margin}
            maxHeight="64px"
            width = {width}
            height = {height}
            borderRadius = "10%"
            style={{
                background: constructBackgrounds
            }}
        >
            <Typography
                color="#FAFAFF"
                margin={"auto"}
                fontSize = {fontSize}
                fontWeight = {500}
            >
                {typeof(children) === "string" ? children.toUpperCase() : children}
            </Typography>
        </Box>

    );
}


export default KeyBoardLetter