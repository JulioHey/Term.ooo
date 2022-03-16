import React from 'react';
import BasePage from '../BasePage';


const Dueto = (props) => {
    return (
        <BasePage 
            currentPage="dueto"
            awnsers = {["serao", "porra"]}
            numberOfTries = {7}
        >
        </BasePage>
    );
}

export default Dueto;