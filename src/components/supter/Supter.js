import React from 'react';

const Supter = (props) => {

    return (
        <div>
            Dynamic Supters is {props.match.params.id}..
        </div>
    )
}

export default Supter;