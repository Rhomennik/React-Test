import React from "react";
import PropTypes from "prop-types";

const Home = ({ username, tasks }) => (
  <div>
    <p>Welcome, {username}!</p>
    <ul>{tasks && tasks.map((task, id) => <li key={id}>{task}</li>)}</ul>
  </div>
);

Home.propTypes = {
  username: PropTypes.string,
  tasks: PropTypes.array
};

export default Home;
