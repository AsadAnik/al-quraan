import React from 'react';
import SearchBar from '../components/widgets/Search';
import HeaderBar from '../components/widgets/HeaderBar';
import QuraanListView from '../components/home/QuraanList';
///React-Redux...
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllSurahList, searchSpecificSurah } from '../store/actions';
import { full_quraan } from '../Firebase';


class Home_container extends React.Component {
    //The Lifecycle Method...
    componentDidMount() {
        // Fetching data from firebase and send to Redux-Store..
        full_quraan.once('value').then(snapShot => {
            let putInto = [];

            snapShot.forEach(element => {
                putInto.push(element.val())
            })

            this.props.getAllSurahList(putInto)
        })
    }

    changeKeyWithSearch = (event) => {
        const keys = event.target.value;

        if(keys.length >= 3){
            console.log(keys.length);
            full_quraan.orderByChild('nameSimple').equalTo(keys).once('value')
            .then(snapShot => {
                let putInto = [];

                snapShot.forEach(snap => {
                    putInto.push(snap.val())
                })

                this.props.searchSpecificSurah(putInto);    
            })
            // this.props.searchSpecificSurah(keys);
        }
        
        if(keys.length < 1 || keys.length === 0){
            console.log('1')
            full_quraan.once('value').then(snap => {
                this.props.getAllSurahList(snap.val())
            })
        }
    }


    ///The Render Method...
    render() {
        ///testing data from redux...
        console.log('Cehcking the data -->>', this.props)

        return (
            <div>
                <SearchBar change={this.changeKeyWithSearch} />
                <HeaderBar />
                <QuraanListView quraanList={this.props.quraan_details} />
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
        getAllSurahList,
        searchSpecificSurah
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_container);