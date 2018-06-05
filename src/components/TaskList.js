import React from 'react';
import Tasks from './Tasks';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addItem() {
    this.setState({
      counter: (this.state.counter + 1),
    });
    const number = this.state.counter;
    const newItem = { number };

    this.state.items.push(newItem);
  }
  removeItem() {
    if (this.state.items.length > 0) {
      this.state.items.pop();
      this.setState({
        counter: (this.state.counter - 1),
      });
    }
  }
  clearList() {
    this.setState({
      items: [],
      counter: 0,
    });
  }

  render() {
    return (
      <div className="hero-head">
        <div className="buttons is-centered">
          <button className="button is-success" onClick={this.addItem}>
            <span className="icon is-medium">
              <i className="fas fa-plus-circle" />
            </span><span>Add</span>
          </button>
          <button className="button is-danger" onClick={this.removeItem}>
            <span className="icon is-medium">
              <i className="fas fa-minus-circle" />
            </span><span>Remove</span>
          </button>
          <button className="button is-black" onClick={this.clearList}>
            <span className="icon is-medium">
              <i className="fas fa-trash-alt" />
            </span><span>Clear</span>
          </button>
        </div>
        <div className="hero-body">
          <Tasks items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default TaskList;
