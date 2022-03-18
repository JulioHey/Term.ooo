import React, { useCallback, useMemo } from 'react';
import { Box } from '@mui/material';
import { useGameContext } from '../../contexts/gameContext';


const LetterSpan = ({
    letterIndex,
    wordIndex,
    letter = "",
    status = "none",
    margin = "0 0.50em",
}) => {
    const [state, actions] = useGameContext();

    const color = useMemo(() => {
        if (status === "none") {
            return "";
        } else if (status === "success") {
            return "#3aa394";
        } else if (status === "error") {
            return "#191516"
        } else if (status === "disabled") {
            return "#615458"
        } else {
            return "#d3ad69"
        }
    }, [
        status,
    ]);

    const handleClick = useCallback(() => {
        if (state.currentTry === wordIndex)
        {
            actions.setCurrentIndex({currentIndex: letterIndex});
        }
    }, [
        state.currentTry,
        wordIndex,
        letterIndex,
        actions
    ])

    return (
        <Box
            component={"span"}
            onClick={handleClick}
            fontSize = {state.tries.length === 10 ? "20px" : "35px"}
            fontWeight={600}
            color="#FAFAFF"
            style={{
                alignItems: "center",
                borderRadius: "10%",
                display: "inline-flex",
                fontWeight: "500",
                height: `${state.tries.length === 10 ? "35px" : "50px"}`,
                justifyContent: "center",
                margin: `${margin}`,
                width: `${state.tries.length === 10 ? "35px" : "50px"}`,
                backgroundColor: color,
                border: `${state.tries.length === 10 ? "3px" : "4px"} solid ${color ? color : "#4c4347"}`,
                borderBottom: `${state.currentIndex === letterIndex && state.currentIndex && state.currentTry === wordIndex ? "8px" : "4px"} solid ${color ? color : "#4c4347"}`,
            }}
        >
            {letter.toUpperCase()}
        </Box>
    )
}

export default LetterSpan;