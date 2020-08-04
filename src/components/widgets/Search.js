import React from 'react';
import { Form } from 'react-bootstrap';
import StylesModule from '../../style_modules/Home.module.css';

///Search Bar Component...
const Search = (props) => {
    //Return Statement...
    return (
        <Form className={'m-4'}>
            <Form.Control 
                type="text" 
                placeholder="Search" 
                className={StylesModule.searchForm}
                onChange={(event) => props.change(event)}
            />
        </Form>
    )
}

export default Search;