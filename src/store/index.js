import {createStore, combineReducers} from 'redux';
import SurahReducer from './reducers/surah_reducer';

///Created the RootReducer...
const rootReducer = combineReducers({
    surah_reducer: SurahReducer,
})

// ///Created with middleware...
// const storeWithMiddleware = applyMiddleware()(createStore);
// const store = storeWithMiddleware(rootReducer);

//Created Store Without Middleware...
const store = createStore(rootReducer)

export default store;