import { Container, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => {
    return {
        rowContainer: {
            width: "100%",
            display: "flex !important",
            flexDirection: "row",
            marginBottom: "40px"
        },
        columnContainer: {
            width: "160px !important",
            justifyContent: "center",
            alignContent: "center",
            margin: ""
        }
    }
});

const StatsColumn = ({
    value,
    subtitle
}) => {
    const classes = useStyles();
   
    return (
        <Container
            classes = {{
                root: classes.columnContainer
            }}
        >
            <Typography
                fontSize = "40px"
                color = "#FAFAFF"
                textAlign = "center"   
            >
                {value}
            </Typography>
            <Typography
                fontSize = "20px"
                color = "#BBB"
                textAlign = "center"
                fontWeight= "300"   
            >
                {subtitle}
            </Typography>
        </Container>
    )
}

const StatsRow = ({
    wins,
    games,
    currWinStreak,
    maxWinStreak,
}) => {
    const classes = useStyles();

    return (
        <Container
            classes = {{
                root: classes.rowContainer
            }}
        >
            <StatsColumn 
                value= {wins}
                subtitle = "jogos"
            />
            <StatsColumn 
                value= {`${wins*100/games}%`}
                subtitle = "de vitórias"
            />
            <StatsColumn 
                value= {currWinStreak}
                subtitle = "sequência de vitórias"
            />
            <StatsColumn 
                value= {maxWinStreak}
                subtitle = "melhor sequência"
            />
        </Container>
    )
}

export default StatsRow;