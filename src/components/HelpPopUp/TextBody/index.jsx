import { Typography } from '@mui/material';
import React from 'react';

const TextBody = ({
    children = "",
    marginTop = "10px"
}) => {
    return (
        <Typography
            variant="body1"
            fontSize="23px"
            color="#bbb"
            marginTop={marginTop}
            fontWeight={300}
        >
            {children}
        </Typography>
    );
}

export default TextBody;