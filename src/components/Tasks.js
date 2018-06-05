import React from 'react';

class Tasks extends React.Component {
  render() {
    const number = this.props.items;
    return (
      <ul className="container">
        {number === 'null' ? '' : number.map(task =>
          <li className="card" key={task.number}><div className="card-body has-text-centered"><p className="is-size-4">Task number </p><p className=" is-size-1">{(task.number + 1)}</p></div></li>)}
      </ul>
    );
  }
}

export default Tasks;
