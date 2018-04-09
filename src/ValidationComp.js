import React from 'react';

const ValidationComponent = (props) =>{
    const xlength = props.clength;
    let displayInfo=null;
    if(xlength<=5 && xlength>0){
        displayInfo = (
            <div>
                Text length : {xlength} : too small
            </div>
        );
    }
    else if(xlength > 20){
        displayInfo = (
            <div>
                Text length : {xlength} : too big
            </div>
        );
    }
    return(
        <div>
            {displayInfo}
        </div>
    );
}

export default ValidationComponent;