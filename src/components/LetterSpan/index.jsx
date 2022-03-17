import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';


const LetterSpan = ({
    currentPage = "",
    onClick = () => {},
    currentIndex = false,
    letter = " ",
    status = "none",
    margin = "0 0.50em",
    currentTry = false,
}) => {
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

    return (
        <Box
            component={"span"}
            onClick={onClick}
            fontSize = {currentPage === "quarteto" ? "20px" : "35px"}
            fontWeight={600}
            color="#FAFAFF"
            style={{
                alignItems: "center",
                borderRadius: "10%",
                display: "inline-flex",
                fontWeight: "500",
                height: `${currentPage === "quarteto" ? "35px" : "50px"}`,
                justifyContent: "center",
                margin: `${margin}`,
                width: `${currentPage === "quarteto" ? "35px" : "50px"}`,
                backgroundColor: color,
                border: `${currentPage === "quarteto" ? "3px" : "4px"} solid ${color ? color : "#4c4347"}`,
                borderBottom: `${currentIndex && currentTry ? "8px" : "4px"} solid ${color ? color : "#4c4347"}`,
            }}
        >
            {letter.toUpperCase()}
        </Box>
    )
}

export default LetterSpan;