import React, {Component} from 'react';
import Content from '../components/chapter/Contents';
import {full_quraan} from '../Firebase';

import {connect} from 'react-redux';
import {chaptersAction} from '../store/actions';
import {bindActionCreators} from 'redux';


class Chapter_container extends Component{
    ///The lifecycle Method...
    componentDidMount(){
        full_quraan.orderByKey().equalTo(this.props.userSelected).once('value')
                   .then(snapData => {
                        let data = [];
                        snapData.forEach(item => {
                            data.push(item.val())
                        })   
                        ///Call the Dispatch Function with data..
                        this.props.chaptersAction(data)
                   })
    }
    
    //The Rentering Method to returining somethings..
    render(){
        // console.log('CONTENTS data Dispatched ----- ', this.props.chaptersElement);

        return(
            <Content selectedContent={this.props.chaptersElement} />
        )
    }
}

///Get State and the Dispatching Function...
const mapStateToProps = (state) => {
    return {
        ...state.chapter_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        chaptersAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter_container);