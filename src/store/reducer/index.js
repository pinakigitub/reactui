import {combineReducers} from 'redux';
import userInfoReducer from "./userInfoReducer";


 const  rootReducers =combineReducers({
     userData: userInfoReducer
 });

 export default rootReducers;