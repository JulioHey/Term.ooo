import React from 'react';
import { 
    useState, 
    useMemo 
} from 'react';
import { 
    AppBar, 
    Toolbar, 
    Container,
    Typography,
} from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import { makeStyles } from '@mui/styles';

import arrow from '../../assets/images/arrow_up.svg'
import LinkForOtherGame from './LinkForOtherGame';
import AppBarIconButton from './AppBarIconButton';
import HelpPopUp from '../HelpPopUp';
import StatsPopUp from '../StatscPopUp';


const useStyles = makeStyles((theme) => {
    return {
        container: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
        },
        topBar: {
            display: "flex !important",
            flexDirection: "row",
            backgroundColor: theme.palette.primary.dark,
            transformOrigin: "top",
            transition: "height 0.5s",
            margin: "0 auto",
            overflow: "hidden",
            height: "60px",
        },
        topBarHidden: {
            display: "flex !important",
            flexDirection: "row",
            backgroundColor: theme.palette.primary.dark,
            overflow: "hidden",
            transition: "height 0.5s",
            margin: "0 auto",
            height: "0px"
        },
        appBarBottom: {
            width: "1000px",
            alignSelf: "center",
        },
        buttonBorder: {
            borderRadius: "8px",
            border: `2px solid ${theme.palette.primary.light}`,
            padding: "4px 12px !important",        
            fontSize: "20px",
            color: theme.palette.primary.light,
            fontWeight: 800,
            width: "40px",
            height: "35px",
        },
        buttonIconBorder: {
            borderRadius: "8px",
            border: `2px solid ${theme.palette.primary.light}`,
            padding: "2px 6px !important",        
            fontSize: "25px",
            color: theme.palette.primary.light,
            fontWeight: 800,
            height: "35px",
            width: "40px",
        },
        imageIconDown: {
            width: "30px",
            height: "30px",
            transition: "1s",
            transform: "rotate(180deg)"
        },
        imageIconUp: {
            width: "30px",
            height: "30px",
            transition: "1s",
            transform: "rotate(0)"
        },
        buttonImageBorder: {
            borderRadius: "8px",
            border: `2px solid ${theme.palette.primary.light}`,
            padding: "0px 5px 4px !important",        
            color: theme.palette.primary.light,
            fontWeight: 800,
            height: "35px",
            width: "40px",
        },
        buttonsTopAppBar: {
        }
    }
})


const TermAppBar = (props) => {
    const [showAppBar, setShowAppBar] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    const classes = useStyles();

    const AppBarTop = useMemo(() => {
        return (
            <Container 
                position="static"
                classes={{root: showAppBar ? classes.topBar : classes.topBarHidden, }}
            >
                    <LinkForOtherGame currentPage={props.currentPage}>
                        termo
                    </LinkForOtherGame>    
                    <LinkForOtherGame currentPage={props.currentPage}>
                        dueto
                    </LinkForOtherGame>   
                    <LinkForOtherGame currentPage={props.currentPage}>
                        quarteto
                    </LinkForOtherGame>          
            </Container>
        )
    }, [
        showAppBar, 
        classes.topBar, 
        classes.topBarHidden,
        props.currentPage
    ]);

    const AppBarBottom = useMemo(() => {
        return (
            <AppBar 
                position="static"
                color="transparent"
            >
                <Toolbar
                    classes={{root: classes.appBarBottom}}
                >
                    <AppBarIconButton 
                        style={ classes.buttonImageBorder}
                        onClick={() => setShowAppBar(value => !value)}
                    >
                        <img alt="arrow" className={ showAppBar ? classes.imageIconDown : classes.imageIconUp} src={arrow} />
                    </AppBarIconButton>
                    <AppBarIconButton 
                        style={ classes.buttonBorder}
                        onClick={() => setShowDialog("help")}
                    >
                        ?
                    </AppBarIconButton>
                    <Typography 
                        variant="h4"
                        margin="auto"
                        color="#FAFAFF"
                        fontWeight={600}
                    >
                        {props.currentPage.toUpperCase()}
                    </Typography>
                    <AppBarIconButton 
                        style={ classes.buttonIconBorder}
                        onClick={() => {}}
                    >
                        <SettingsRoundedIcon />
                    </AppBarIconButton>
                    <AppBarIconButton 
                        style={ classes.buttonIconBorder}
                        onClick={() => setShowDialog("stats")}
                    >
                        <SignalCellularAltRoundedIcon />
                    </AppBarIconButton>
                </Toolbar>
            </AppBar>
        );
    }, [
        classes.buttonBorder,
        classes.buttonIconBorder,
        classes.buttonImageBorder,
        classes.imageIconDown,
        classes.imageIconUp,
        classes.appBarBottom,
        props.currentPage,
        showAppBar,
    ]);

    const HelpDialog = useMemo(() => {
        return (
         <HelpPopUp 
            open={showDialog === "help"}
            handleClose={() => setShowDialog("false")}
         />
        )
    }, [showDialog, setShowDialog]);

    const StatsDialog = useMemo(() => {
        return (
         <StatsPopUp
            open={showDialog === "stats"}
            handleClose={() => setShowDialog("false")}
         />
        )
    }, [showDialog, setShowDialog]);

    return (
        <Container 
            sx={{ flexGrow: 1 }}
            classe={{
                root: classes.container
            }}
        >
            {HelpDialog}
            {StatsDialog}
            {AppBarTop}
            {AppBarBottom}
        </Container>
    );
}

export default TermAppBar;