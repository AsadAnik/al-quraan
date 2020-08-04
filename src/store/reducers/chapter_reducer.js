///The reducer for supters showing the list inner supter container..
export default function(state = null, action){
        switch(action.type){
            case "CHAPTER_SELECTED":
                return {...state, chaptersElement: action.payload};
        
            default: 
                return state;    
        }
}