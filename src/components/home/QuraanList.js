import React from 'react';
import {Row, Col} from 'react-bootstrap';
import StylesModule from '../../style_modules/Home.module.css';
import RevelationIcon from '../widgets/RevelationIcon';
import Loading from '../widgets/Loading';

const QuraanList = ({ quraanList }) => {
    //Full Quraan Home page list viewer function....
    const fullListOfQuraan = (holyQuraan) => (
        holyQuraan && holyQuraan.length > 0 ?

        holyQuraan.map(item => (
            <Row key={item.id} className={StylesModule.surahRaws}>
                <Col>
                    <span className={StylesModule.makeCircle}>
                        {item.id}
                    </span>
                </Col>

                <Col>
                    <h5 className={'font-weight-bold'}>{item.nameComplex}</h5>
                    <div>
                        <h6>{item.nameArabic}</h6>
                    </div>
                </Col>

                <Col>
                    <span className={StylesModule.makeCircle}>
                            {item.versesCount}
                    </span>
                </Col>

                <Col>
                    <div className={'d-flex mt-1 ml-5'}>
                        <RevelationIcon placeName={item.revelationPlace} iconSize={40} />
                        <span className={StylesModule.revelationName}>
                            {item.revelationPlace}
                        </span>
                    </div>
                </Col>
            </Row>
        ))
        :
        <div className={StylesModule.loading}>
            <Loading type={'cylon'} color={'darkslategray'} />
        </div>
    )

  //The return statement...          
    return (
        <div>
            {fullListOfQuraan(quraanList)}
        </div>
    )
}

export default QuraanList;