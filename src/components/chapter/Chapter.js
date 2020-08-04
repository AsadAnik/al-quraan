import React from 'react';
import { Container } from 'react-bootstrap';
import ChapterCont from '../../containers/ChapterContainer';

const Chapter = (props) => {

    return (
        <div>
            <Container>
                <ChapterCont userSelected={props.match.params.id} />
            </Container>
        </div>
    )
}

export default Chapter;