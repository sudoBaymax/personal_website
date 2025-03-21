import React, { useState } from 'react';
import '../styles/Terminal.css';
import 'boxicons'
import { Minus, Square, X} from 'lucide-react'

const Terminal: React.FC = () => {
  return(
    <div className="terminal-wrapper">
      <div className="header-wrapper">
        <div className="header">
          <div className="left">
            <img src="" alt="" />
          </div>
          <div className="center">
            <p>jatou@kali: ~Desktop</p>
          </div>
          <div className="right">
            <Minus />
            <Square />
            <X />
          </div>
        </div>

        <div className="tools">
          <ul>
            <li>File</li>
            <li>Actions</li>
            <li>Edit</li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="type">
        
      </div>

    </div>
  );
};

export default Terminal;
