import React, { useState } from 'react';
import './Terminal.css';

const Terminal: React.FC = () => {
  return(
    <div className="terminal-wrapper">
      <div className="header">
        <div className="left">
          <ul>
            <li>
              <a href="#" className="active">File</a>
              <a href="#" className="active">Terminal</a>
              <a href="#" className="active">Terminal</a>
              <a href="#" className="active">Terminal</a>
            </li>
          </ul>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Terminal;
