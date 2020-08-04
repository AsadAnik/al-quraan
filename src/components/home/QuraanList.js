import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import MultiClasses from 'classnames';
import StylesModule from '../../style_modules/Home.module.css';
import RevelationIcon from '../widgets/RevelationIcon';
import Loading from '../widgets/Loading';

const QuraanList = ({ quraanList }) => {
    //Full Quraan Home page list viewer function....
    const fullListOfQuraan = (holyQuraan) => (
        holyQuraan && holyQuraan.length > 0 ?

            holyQuraan.map(item => (
                <div key={item.id}>
                    <Link to={`/${item.chapterNumber}`}>
                        <Row className={StylesModule.surahRaws}>
                            <Col>
                                <span className={StylesModule.makeCircle}>
                                    {item.id}
                                </span>
                            </Col>

                            <Col>
                                <h5 className={MultiClasses('font-weight-bold', StylesModule.surahName)}>{item.nameComplex}</h5>
                                <div>
                                    <h6 className={StylesModule.arabicName}>{item.nameArabic}</h6>
                                </div>
                            </Col>

                            <Col>
                                <span className={StylesModule.makeCircle}>
                                    {item.versesCount}
                                </span>
                            </Col>

                            <Col>
                                <div className={MultiClasses('mt-1', StylesModule.Revelation)}>
                                    <RevelationIcon placeName={item.revelationPlace} iconSize={40} />
                                    <span className={StylesModule.revelationName}>
                                        {item.revelationPlace}
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Link>
                </div>
            ))
            :
            <div className={StylesModule.loading}>
                <Loading type={'cylon'} color={'darkslategray'} height={500} width={300} />
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