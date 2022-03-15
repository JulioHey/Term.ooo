import React, { useMemo } from 'react';
import { Typography } from '@mui/material';


const LetterSpan = ({
    onClick = () => {},
    currentIndex = false,
    letter = " ",
    status = "none",
    fontSize = "24px",
    margin = "0 0.50em"
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
        <Typography
            onClick={onClick}
            variant="body1"
            fontSize={fontSize}
            color="#FAFAFF"
            style={{
                alignItems: "center",
                borderRadius: "10%",
                display: "inline-flex",
                fontWeight: "500",
                height: "2em",
                justifyContent: "center",
                margin: `${margin}`,
                width: "2em",
                backgroundColor: color,
                border: `${fontSize === "24px" ? "3px" : "5px"} solid ${color ? color : "#4c4347"}`,
                borderBottom: `${fontSize === "24px" ? "3px" : currentIndex ? "10px" : "5px"} solid ${color ? color : "#4c4347"}`,
            }}
        >
            {letter.toUpperCase()}
        </Typography>
    )
}

export default LetterSpan;