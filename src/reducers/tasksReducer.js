import {FETCH_TODOS,ADD_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO} from '../actions';
import _ from 'lodash';

export default (state=[],action)=>{
	switch(action.type){
		case FETCH_TODOS:
			return action.payload;
		case ADD_TODO:
      return [action.payload, ...state];
      	case TOGGLE_TODO:
      		return [...state,action.payload];
      	case UPDATE_TODO:
	      return [...state,action.payload]
	    case DELETE_TODO:
	      return [...state,action.payload];
		default:
		 return state;
	}
}
