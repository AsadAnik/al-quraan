import React from 'react';
import { Form } from 'react-bootstrap';

const Search = () => {
   //The object to Styling..
    const style = {
        width: '400px',
        marginLeft: '50%',
        transform: 'translate(-50%)'
    }

    //Return Statement...
    return (
        <Form className={'m-4'}>
            <Form.Control type="text" placeholder="Search" style={style} />
        </Form>
    )
}

export default Search;