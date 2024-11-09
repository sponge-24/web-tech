import React from 'react';

const About = ({ title, info }) => (
  <div className="text-center p-5">
    <h2>{title}</h2>
    <p>{info}</p>
  </div>
);

export default About;
