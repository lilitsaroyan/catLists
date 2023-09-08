import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/cats';

const rootReducer = combineReducers({
    cats: catsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;