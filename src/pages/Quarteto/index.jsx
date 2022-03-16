import React from 'react';
import BasePage from '../BasePage';


const Quarteto = (props) => {
    return (
        <BasePage 
            currentPage="quarteto"
            awnsers = {["serao", "porra", "carro", "modos"]}
            numberOfTries = {10}
        >
        </BasePage>
    );
}

export default Quarteto;