import React from 'react';
import { Container } from 'react-bootstrap';

///Header of this Quraan Application...
const Header = () => {

    return (
        <div>
            <Container>
                <div className={'text-muted mt-4 text-center'}>
                    <img 
                        src="/quraan-logo.png"
                        alt="Al-Quraan"
                        width={80}
                        height={80}
                    />
                    <h4>Read Holy Quraan</h4>
                </div>
            </Container>
        </div>
    )
}

export default Header;