import React from 'react';
import './TerminalSection.css'; // Import styles for the terminal

const TerminalSection = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">user@portfolio:~$</div>
      <div className="terminal-content">
        <p>Welcome to my portfolio!</p>
        <p>Here are some fun facts:</p>
        <ul>
          <li>I'm a software engineer with a passion for web development.</li>
          <li>I love learning new programming languages.</li>
          <li>In my free time, I enjoy hiking and photography.</li>
        </ul>
        <p>Check out my projects:</p>
        <ul>
          <li><a href="#project1">Project 1</a></li>
          <li><a href="#project2">Project 2</a></li>
        </ul>
        <p>For more information, visit the contact page.</p>
      </div>
    </div>
  );
};

export default TerminalSection;
