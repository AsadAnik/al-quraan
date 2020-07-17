import React from 'react';
import {Row, Col} from 'react-bootstrap';
import WidgetsModule from '../../style_modules/Widgets.module.css';

const HeaderBar = () => {
    return (
        <div className={'sticky-top'}>
            <Row className={WidgetsModule.headersRow}>
                <Col>Serial</Col>
                <Col>Name</Col>
                <Col>Verses</Col>
                <Col>Revelation</Col>
            </Row>
        </div>
    )
}

export default HeaderBar;