import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

///Header of this Quraan Application...
const Header = () => {

    return (
        <div>
            <Container>
                <div className={'text-muted mt-4 text-center'}>
                    <Link to={'/'}>
                        <img
                            src="/quraan-logo.png"
                            alt="Al-Quraan"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <h4>Read Holy Quraan</h4>
                </div>
            </Container>
        </div>
    )
}

export default Header;