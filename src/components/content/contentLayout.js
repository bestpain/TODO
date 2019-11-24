import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos,toggleTodo, deleteTodo, toggleTab,TABS} from '../../actions'
import {Link} from 'react-router-dom'
import TodoForm from './TodoForm';
import Todo from './Todo';

class ContentLayout extends React.Component{
	componentDidMount =() => {
    this.props.fetchTodos(this.props.bucketId);
  };

	componentDidUpdate(prevProps) {
    if (this.props.bucketId !== prevProps.bucketId || this.props.todos.length !== prevProps.todos.length ) {
		  this.props.fetchTodos(this.props.bucketId)
    }
  }

	renderTodos = todos => {
    return todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.task}
          done={todo.isComplete}
          toggleTodo={() => this.props.toggleTodo(todo.id)}
          deleteTodo={() => this.props.deleteTodo(todo.id)}
        />
      );
    });
  };

	renderTabs = currTab => {
    return TABS.map(tab => {
      return (
        <button
          key={tab}
          className={tab === currTab ? 'button selected' : 'button'}
          onClick={() => this.props.toggleTab(tab)}
        >
          {tab}
        </button>
      );
    });
  };

	render(){
		let todos = [];		
		if (this.props.currTab === 'all') {
      			todos = this.props.todos;
   		} else if (this.props.currTab === 'active') {
      			todos = this.props.todos.filter(todo => !todo.isComplete);
    	} else if (this.props.currTab === 'done') {
      			todos = this.props.todos.filter(todo => todo.isComplete);
      }

	return(
		<div className="ui raised very padded text container segment" >
		  <article>
		      <TodoForm bucketId={this.props.bucketId}/>
       		{this.props.todos.length ? (
            <div style={{ marginBottom: 20, marginLeft: 10 }}>
              {this.props.todos.filter(todo => !todo.isComplete).length} todos left
            </div>
          ) : null}

          <div>
            {this.props.todos.length ? this.renderTabs(this.props.currTab) : null}
           </div>
          <ul style={{ paddingLeft: 10 }} className="list">
            {this.renderTodos(todos)}
          </ul>
      </article>
		</div>
    )
	}
}


const mapStateToProps=({todos,currTab})=>{
	return {todos:Object.values(todos),
		currTab
	}
}
export default connect(mapStateToProps,{ fetchTodos, toggleTodo, deleteTodo, toggleTab })
(ContentLayout);
