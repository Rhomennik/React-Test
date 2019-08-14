import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';

const Database = {
  Rhomennik: [
    '8am - Adonisjs',
    '12:30pm - Reactjs',
    '15pm - Graphql',
    '20pm - Apollo client & Server'
  ],
  Rhome: ['8am - Rever Tarefas (typora)', '15pm - Comer ;)']
};

class Task extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
  };

  render() {
    const { isLoggedIn, username } = this.props;

    return (
      <>
        <div className="Task">
          {isLoggedIn ? (
            <Home username={username} tasks={Database[username]} />
          ) : (
            <p>Hello, visitor. Sign in to continue.</p>
          )}
        </div>
      </>
    );
  }
}

export default Task;
