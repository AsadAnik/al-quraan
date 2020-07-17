import {createStore, combineReducers} from 'redux';
import SurahReducer from './reducers/surah_reducer';
import ChapterReducer from './reducers/chapter_reducer';

///Created the RootReducer...
const rootReducer = combineReducers({
    surah_reducer: SurahReducer,
    chapter_reducer: ChapterReducer
})

// ///Created with middleware...
// const storeWithMiddleware = applyMiddleware()(createStore);
// const store = storeWithMiddleware(rootReducer);

//Created Store Without Middleware...
const store = createStore(rootReducer)

export default store;