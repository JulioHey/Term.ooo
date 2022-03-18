import React, { useMemo } from 'react';

import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        histoBarContainer: {
            display: "flex !important",
            flexDirection: "row",
            alignContent: "center",
            color: "#FAFAFF",
        }
    }
})

const HistogramBar = ({
    trys,
    value,
    sizePercentage = 100
}) => {
    const classes = useStyles();

    const barStyle = useMemo(() => {
        if (sizePercentage === 0)
        {
            return {
                height: "35px",
                background: "#4C4347",
                textAlign: "right",
                margin: "2px 0 2px 20px",
            }    
        }
        return {
            height: "35px",
            width: `${sizePercentage * 100}%`,
            background: "#009AFE",
            textAlign: "right",
            margin: "2px 0 2px 20px",
        }
    }, [sizePercentage])

    return (
        <Container
            classes = {{
                root: classes.histoBarContainer
            }}
        >
            <Typography
                lineHeight={"35px"}
                fontSize="23px"
                width={20}
                textAlign="center"
            >
            {trys}
            </Typography>
            <div
                style={barStyle}
            >
                <Typography
                    lineHeight={"35px"}
                    fontSize="23px"
                    margin="0 10px"
                >
                {value}
                </Typography>
            </div>
        </Container>
    )
}

const StatsHistgram = ({
    games,
    histogram
}) => {
    return (
        <Container
        >
            {histogram.map((e, index) => (
                <HistogramBar key ={index} trys = {index + 1} value = {e} sizePercentage = {e/games} />))}
            <HistogramBar trys = {<>💀</>} value={games - histogram.reduce((sum, value) => sum += value)} sizePercentage = {(histogram.reduce((sum, value) => sum += value) - games) / games}/>
        </Container>
    )
}

export default StatsHistgram;