import React from 'react';
import BasePage from '../BasePage';


const Termo = (props) => {
    return (
        <BasePage 
            currentPage="termo"
            awnsers = {["serao"]}
            numberOfTries = {6}
        >
        </BasePage>
    );
}

export default Termo;