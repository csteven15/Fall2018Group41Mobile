import { createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as FormReducer } from 'redux-form'
import { AuthReducer } from './../reducers'; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;

