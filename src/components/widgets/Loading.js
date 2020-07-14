import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({type, color}) => {
    return (
        <ReactLoading 
            type={type} 
            color={color} 
            height={500} 
            width={300} 
        />
    )
}

export default Loading;