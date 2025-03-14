import React, { useState } from 'react';
import './Terminal.css';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const user = 'root'; // Track current user
  const host = 'kali'; // Track hostname

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      executeCommand(command);
      setInput('');
    }
  };

  const executeCommand = (command: string) => {
    switch (command) {
      case 'help':
        setOutput((prev) => [...prev, 'Available commands: help, about, projects, skills, clear']);
        break;
      case 'about':
        setOutput((prev) => [...prev, 'This is Joseph\'s portfolio site.']);
        break;
      case 'clear':
        setOutput([]);
        break;
      default:
        setOutput((prev) => [...prev, `Command not found: ${command}`]);
    }
  };

  const handleButtonClick = (action: string) => {
    if (action === 'clear') {
      setOutput([]);
    } else if (action === 'help') {
      setOutput((prev) => [...prev, 'Available commands: help, about, projects, skills, clear']);
    }
  };

  return (
    <div className="terminal">
      <div className="title-bar">
        <div className="window-controls">
          <button className="window-button" onClick={() => handleButtonClick('minimize')}>-</button>
          <button className="window-button" onClick={() => handleButtonClick('maximize')}>☐</button>
          <button className="window-button" onClick={() => handleButtonClick('close')}>X</button>
        </div>
        <span className="title">{`${user}@${host}: ~`}</span>
      </div>
      <div className="menu-bar">
        <span className="menu" onClick={() => handleButtonClick('file')}>File</span>
      </div>
      <div className="output">
        {output.map((line, index) => (
          <div key={index} className="output-line">{line}</div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span className="prompt">({user} 💀 {host})-[~] #</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="input"
          placeholder="Type a command..."
          style={{ marginLeft: '5px' }} // Add margin for spacing
        />
      </div>
    </div>
  );
};

export default Terminal;
