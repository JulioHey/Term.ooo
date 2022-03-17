import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import PopupContainer from '../PopUpContainer';
import ExampleContainer from './ExampleContainer';
import TextBody from './TextBody';


const useStyles = makeStyles((theme) => {
    return {
        helpPopUpContainer: {
            maxWidth: "900px !important"
        }
    }
})


const HelpPopUp = (props) => {
    const classes = useStyles();

    return (
            <PopupContainer
                open={props.open}
                handleClose={props.handleClose}
            >
                <Container
                    classes={{
                        root: classes.helpPopUpContainer
                    }}
                >
                    <TextBody>
                        Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram o quão perto você está da solução.
                    </TextBody>
                    <ExampleContainer 
                        word = "turma"
                        status = "success"
                        letter = "t"
                        finalText="faz parte da palavra e está na posição correta."
                    />
                    <ExampleContainer 
                        word = "viola"
                        status = "place"
                        letter = "o"
                        finalText="faz parte da palavra mas em outra posição."
                    />
                    <ExampleContainer 
                        word = "pulga"
                        status = "error"
                        letter = "g"
                        finalText="não faz parte da palavra."
                    />
                    <TextBody>
                        Os acentos são preenchidos automaticamente, e não são considerados nas dicas.
                    </TextBody>
                    <TextBody>
                        As palavras podem possuir letras repetidas.
                    </TextBody>
                    <TextBody
                        marginTop='40px'
                    >
                        Uma palavra nova aparece a cada dia.
                    </TextBody>
                </Container>
               
            </PopupContainer>
    );
}

export default HelpPopUp;