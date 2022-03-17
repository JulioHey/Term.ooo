import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import React, { useCallback, useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => {
    return {
        clockCounterContainer: {
            textAlign: "center",
            width: "260px"
        },
        clockSection: {
            display: "flex !important",
            flexDirection: "row",
            placeItems: "center"
        },
    }   
})

const ClockCounter = () => {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const classes = useStyles();


    const getTime = useCallback(() => {
        var currentdate = new Date();

        var hours = currentdate.getUTCHours();

        // correct for number over 24, and negatives
        if (hours >= 24) { hours = hours - 24; }
        if (hours < 0) { hours = hours + 12; }

        hours = 24 - (hours - 2);

        // add leading zero, first convert hour to string
        hours = hours + "";
        if (hours.length === 1) { hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = currentdate.getUTCMinutes();
        minutes = Math.abs(minutes - 60);

        // add leading zero, first convert hour to string
        minutes = minutes + "";
        if (minutes.length === 1) { minutes = "0" + minutes; }

        var seconds = currentdate.getUTCSeconds();
        seconds = Math.abs(seconds - 60);
        seconds = seconds + ""
        if (seconds.length === 1) { seconds = "0" + seconds; }

        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, []);


    useEffect(() => {
        window.setInterval(function () {
            getTime();
        }, 1);
    }, [])


    return (
        <Container
            classes={{
                root: classes.clockCounterContainer
            }}
        >
            <Typography
                fontSize="20px"
                color="#BBB"
            >
                próxima palavra em
            </Typography>
            <Typography
                fontSize="45px"
                color = "#FAFAFF"
            >
                {`${hours}:${minutes}:${seconds}`}
            </Typography>
        </Container>
    );
}

const ClockSection = () => {
    const classes = useStyles();
   
    return (
        <Container
            classes={{
                root: classes.clockSection
            }}
        >
            <ClockCounter />
            <Container
                style={{
                    display: "flex",
                    flexDirection: "row",
                    placeItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    background: "#009AFE",
                    height: "60px",
                    borderRadius: "10px"
                }}
            >
                <Typography
                    fontSize="25px"
                    color = "#FAFAFF"
                > 
                    compartilhe
                </Typography>
                <ShareOutlinedIcon 
                    htmlColor = "#FAFAFF"
                    fontSize="large" 
                />
            </Container>
        </Container>
    );
}


export default ClockSection;