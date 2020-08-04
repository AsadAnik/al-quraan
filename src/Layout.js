import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Layout = (props) => {
    return (
        <Router>
            <Header />
            {props.children}
            <Footer />
        </Router>
    )
}

export default Layout;