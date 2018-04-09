import React from 'react';

const CharComponent = (props) => {

    const charStyle = {
        backgroundColor: 'brown',
        color: 'ivory',
        font: 'inherit',
        border: '1px solid lightBrown',
        padding: '4px',
        margin: '1px'
    };
    return(
        <div>
            <button style={charStyle} onClick = {props.delChar}>{props.xchar}</button>
            
        </div>
    );

}

export default CharComponent;