import todo from '../apis/todo'
//bucket actions
export const FETCH_BUCKETS='FETCH_BUCKETS';
export const CREATE_BUCKET='CREATE_BUCKET'
export const FETCH_BUCKET='FETCH_BUCKET'
//todos action
export const FETCH_TODOS='FETCH_TODOS';
export const ADD_TODO='ADD_TODO'
export const TOGGLE_TODO='TOGGLE_TODO'
export const UPDATE_TODO='UPDATE_TODO'
export const DELETE_TODO='DELETE_TODO,'
export const TOGGLE_TAB='TOGGLE_TAB'
export const SHOW_ALL = 'all';
export const SHOW_ACTIVE = 'active';
export const SHOW_DONE = 'done';
export const TABS = [SHOW_ALL, SHOW_ACTIVE, SHOW_DONE];

//bucket action creator
export const createBucket=Value=>async (dispatch)=>{
	const response=await todo.post('/bucket/add',{Value})
	dispatch({type:CREATE_BUCKET,payload:response.data,Value}) 
}

export const fetchBuckets=()=>async dispatch=>{
	const response=await todo.get('/')
	dispatch({type:FETCH_BUCKETS,payload:response.data})
}

export const fetchBucket=(id)=>async dispatch=>{
	const response=await todo.get(`/bucket/${id}`);
	dispatch({type:FETCH_BUCKET,payload:response.data,bucketid:id})
}

//todos action creator
export const fetchTodos=(id)=>async dispatch=>{
	const response=await todo.get(`/todos/${id}`);
	dispatch({type:FETCH_TODOS,payload:response.data})
}

export const updateTodo = (id, name) => async dispatch => {
  const response = await todo.put(`/todos/edit/${id}`, { name });
  dispatch({ type: UPDATE_TODO, payload: {} });
};

export const addTodo = (id,name) => async dispatch => {
  const response=await todo.post(`/todos/add`, { name,id });
  dispatch({ type: ADD_TODO, payload: {}});
};

export const toggleTodo = id => async dispatch => {
  const response = await todo.put(`/todos/toggle/${id}`);
  dispatch({ type: TOGGLE_TODO, payload: {} });
};
export const deleteTodo = id => async dispatch => {
  const res = await todo.delete(`/todos/delete/${id}`);
  dispatch({ type: DELETE_TODO, payload: {} });
};

export const toggleTab = tab => async dispatch => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};