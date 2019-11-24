import {FETCH_BUCKETS,CREATE_BUCKET,FETCH_BUCKET} from '../actions'
import _ from 'lodash';


export default (state={},action)=>{
	switch(action.type){
		case FETCH_BUCKETS:
			return {...state,..._.mapKeys(action.payload,'id')};
		case FETCH_BUCKET:
			return {...state,[action.payload.id]:action.payload};
		case CREATE_BUCKET:
			return {...state,[action.payload.insertId]:{id:action.payload.insertId,category:action.Value}};
		default:
		 return state;
	}
}