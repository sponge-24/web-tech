import React from 'react';

const Home = ({ title, description }) => (
  <div className="text-center p-5">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default Home;
