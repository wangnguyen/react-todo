import React from 'react';

export default class CreateTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
  }

  renderError(){
    if(this.state.error){
      return(
        <div style={{color:'red'}}>{this.state.error}</div>
      )
    }
    return;
  }

  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type='text' placeholder='What do I need to do?' ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
    )
  }

  handleCreate(event){
    event.preventDefault();
    const validate = this.props.validateInput(this.refs.createInput.value);
    if(validate){
        this.state.error = validate;
        this.setState({error: this.state.error});
        return;
    }

    this.state.error = null;
    this.setState({error: this.error});
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}
