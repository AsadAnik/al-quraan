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

    ///Method for Capitalizing the value...
    toCapitalize = (value) => {
        return value.replace(/\w\S*/g, (txt) => (
               txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        ))
    }

    //The Change Key Method to Finding the value when the values take change..
    changeKeyWithSearch = (event) => {
        const keys = event.target.value;

        ///Doing some operation with keys...
        const makeOperationSome = this.toCapitalize(keys);
        const searchValue = makeOperationSome.split(" ").join("-");

        //make some console view..
        console.log(searchValue)
        console.log(searchValue.length);

        if(searchValue.length >= 3){    
            full_quraan.orderByChild('nameSimple').equalTo(searchValue).once('value')
            .then(snapShot => {
                let putInto = [];

                snapShot.forEach(snap => {
                    putInto.push(snap.val())
                })

                this.props.searchSpecificSurah(putInto);    
            })
            // this.props.searchSpecificSurah(searchValue);
        }
        
        if(searchValue.length < 1 || searchValue.length === 0){
            console.log('1')
            full_quraan.once('value').then(snap => {
                this.props.getAllSurahList(snap.val())
            })
        }
    }


    ///The Render Method...
    render() {
        ///testing data from redux...
        // console.log('Cehcking the data -->>', this.props)

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