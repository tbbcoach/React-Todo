import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    submitItem = (e) => {
        e.preventDefault();
        this.props.addItem(e, this.state.newItem);
        this.setState({ newItem: '' });

    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    type='text'
                    name='item'
                />
                <button>Add Task!</button>
            </form>
        );
    }
}
    
export default TodoForm;