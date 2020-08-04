import React from 'react';
import { Link } from 'react-router-dom';
import Multiple from 'classnames';
import { Jumbotron, Container } from 'react-bootstrap';
import StylesModule from '../../style_modules/Footer.module.css';

///The Footer Section of this application...
const Footer = () => {
    return (
        <Container>
            <Jumbotron className={Multiple('m-0 p-2 mt-4', StylesModule.Footer)}>
                <div className={Multiple('bg-light', StylesModule.FooterDivOne)}>
                    <Link to={'/'}>
                        <img
                            src={'/quraan-logo.png'}
                            alt={'Read Al-Quran'}
                            className={'img-fluid'}
                            height={50}
                            width={50}
                        />
                    </Link>
                </div>
                <div className={Multiple(StylesModule.FooterDivSecond, 'bg-light mt-2')}>
                    <h6 className={'text-muted text-uppercase mt-2'}>developed by asad anik</h6>
                </div>
            </Jumbotron>
        </Container>
    )
}

export default Footer;