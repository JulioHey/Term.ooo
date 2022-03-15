import React from 'react';
import TermAppBar from '../../components/AppBar';
import KeyBoard from '../../components/KeyBoard';


const BasePage = (props) => {
    return (
        <>
           <TermAppBar 
                currentPage={props.currentPage}
            />
            {props.children}
            <KeyBoard />
        </>
    );
}

export default BasePage;