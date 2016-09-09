import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component{

  renderItems(){
    const props = _.omit(this.props,'todos');
    return _.map(this.props.todos, (todo,index) => <TodosListItem key={index} {...todo} {...props} />);
    /*
    (todo,index) => <TodosListItem />
    ==> function (todo, index){ return <TodosListItem />}

    {...todo}
    ==> task = {todo.task} isCompleted = {todo.isCompleted}
    */
  }

  render(){
    return(
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }

}
