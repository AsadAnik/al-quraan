import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StylesModule from '../style_modules/Home.module.css';
import RevelationIcon from '../components/widgets/RevelationIcon';
import Loading from '../components/widgets/Loading';

///React-Redux...
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllSurahList } from '../store/actions';
import { full_quraan } from '../Firebase';


class Home_container extends React.Component {
    //The Lifecycle Method...
    async componentDidMount() {
        //Fetching data from firebase and send to Redux-Store..
        await full_quraan.once('value').then(snapData => {
            const usefullData = snapData.val();
            this.props.getAllSurahList(usefullData);
        })
        .catch(error => console.log('Catched Error When Targets for data from database : ', error))
    }

    ///the Method is helping to get the data from redux store..  
    getAllSurahs = (holyQuraan) => (
        holyQuraan && holyQuraan.full_quraan.length > 0 ?

            holyQuraan.full_quraan.map(item => (
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

    ///The Render Method...
    render() {
        ///testing data from redux...
        // console.log(this.props.quraan_details)
        return (
            <div>
                {this.getAllSurahs(this.props.quraan_details)}
            </div>
        )
    }
}

///Dispatching and State geting from redux...
const mapStateToProps = (state) => {
    return {
        ...state.surah_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllSurahList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_container);