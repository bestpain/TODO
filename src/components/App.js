import React from 'react';
import history from '../history'
import {Router,Route,Switch} from 'react-router-dom';
import homepage from './layout/homepage'
import todolist from './content/todoList'

const App=()=>{
  return(
    <div>
        <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={homepage} />
            <Route path="/bucket/:id" exact component={todolist} />
          </Switch>
        </div>
        </Router>
    </div>
  )
}

export default App; 