///The surah_reducer for seeing surahs...
export default function(state = null, action){
    switch(action.type){
        case "ALL_SURAHS":
            return {...state, quraan_details: action.payload};
        
        default:
            return state;
    }
}