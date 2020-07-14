import React from 'react';
import {Container} from 'react-bootstrap';
import HomeCont from '../../containers/HomeContainer';
import HeaderBar from '../widgets/HeaderBar';

const Home = () => {
    return (
        <div>
            <Container>
                <HeaderBar />
                <HomeCont />
            </Container>
        </div>
    )
}

export default Home;