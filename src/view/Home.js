import React from 'react';
import TaskList from '../components/TaskList';

import './Home.sass';

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-dark is-fullheight">
        <TaskList />
      </section>
    );
  }
}

export default Home;
