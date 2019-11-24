import {combineReducers} from 'redux'
import BucketReducer from './BucketReducer'
import tasksReducer from './tasksReducer'
import currTab from './currTab'

export default combineReducers({
	buckets:BucketReducer,
	todos:tasksReducer,
	currTab
})


