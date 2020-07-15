///The Action for Dispatching then throwing the Data...
// import {full_quraan} from '../../Firebase';

export function getAllSurahList(quraan){
        return {
            type: "ALL_SURAHS",
            payload: quraan
        }
}

///The Action for the Search Bar...
export function searchSpecificSurah(quraan){

    // let surah = [];

    // full_quraan.orderByChild('nameSimple').equalTo(quraan).once('value')
    //             .then(snapShot => {
    //                 surah.push(snapShot.val());
    //             })

    return {
        type: "SEARCHED_SURAH",
        payload: quraan
    }
}