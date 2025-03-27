import React, { useState, useEffect, useRef } from 'react';
import './TerminalSection.css';

const KaliTerminal = () => {
  const [input, setInput] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [output, setOutput] = useState<{ type: string; content: string }[]>([
    { type: 'system', content: getPromptString('/root') }
  ]);
  const [pwd, setPwd] = useState<string>('/root');
  const [filesystem] = useState<{ [key: string]: { type: string; contents: any } }>({
    '/root': {
      type: 'dir',
      contents: {
        'Documents': { type: 'dir', contents: {} },
        'Downloads': { type: 'dir', contents: {} },
        'tools': { 
          type: 'dir', 
          contents: {
            'nmap_results.txt': { 
              type: 'file', 
              content: 'PORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\n8080/tcp open  http-proxy' 
            }
          }
        },
        'welcome.txt': { 
          type: 'file', 
          content: 'Welcome to my Kali Linux portfolio terminal!\n\nTry some commands:\n- ls -la\n- cat welcome.txt\n- cd tools\n- nmap -sV 192.168.1.1\n- help' 
        }
      }
    }
  });

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [output]);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resumeData = {
    name: 'Joseph Jatou',
    location: 'Kitchener Waterloo Area',
    email: 'jatoujoseph@gmail.com',
    linkedin: 'linkedin.com/in/josephjatou',
    github: 'github.com/sudoBaymax',
    website: 'jatou.ca',
    education: 'Wilfrid Laurier University, BSc Computer Science, Minor in Business (Expected 2028)',
    skills: {
      languages: ['JavaScript (5yrs)', 'Python (6yrs)', 'C++ (2yrs)', 'Java (3yrs)', 'SQL (1yr)', 'Rust (1yr)'],
      software: ['AWS', 'GCP', 'Langchain', 'Docker', 'Kubernetes', 'TensorFlow', 'Jupyter Notebook', 'Selenium', 'Bootstrap', 'Git', 'Bash']
    },
    experience: [
      {
        title: 'Co-Founder & Software Engineer',
        company: 'GLANCE',
        duration: 'Nov 2024 - Present',
        location: 'Toronto, ON',
        description: [
          'Developed a full-stack FARM application (FastAPI, React, MongoDB) for AI-driven eyewear recommendations.',
          'Built proprietary ML models detecting 17+ beauty features.',
          'Engineered an API for seamless integration with optical stores.',
          'Developed an enterprise dashboard for eCommerce and inventory management.',
          'Conducted market validation with 75+ end users and 14+ optical stores.'
        ]
      },
      {
        title: 'AI Research Intern',
        company: 'Wilfrid Laurier University',
        duration: 'Sep 2024 - Jan 2025',
        location: 'Waterloo, ON',
        description: [
          'Authored a research paper on medical image segmentation models.',
          'Developed ML pipelines using Apache Airflow, ETL, and Docker.',
          'Fine-tuned tumor detection models with 92% accuracy.',
          'Reviewed 20+ research papers, improving literature review efficiency.'
        ]
      }
    ],
    projects: [
      {
        name: 'Eyewear Recommendation System',
        description: 'AI-powered eyewear recommendation tool using ML and AR.',
        github: 'github.com/sudoBaymax'
      },
      {
        name: 'Anti-Phishing Chrome Extension',
        description: 'AI-driven phishing detection tool.',
        github: 'github.com/sudoBaymax/spearphish'
      },
      {
        name: 'Find That Pokémon',
        description: 'TensorFlow-based Pokémon image classification.',
        github: 'github.com/sudoBaymax/pokemon-finder'
      }
    ]
  };

  // Function needs to be defined before it's used in initial state
  function getPromptString(currentPath: string): string {
    return `┌──(root💀kali)-[${currentPath}]\n└─# `;
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [output]);

  useEffect(() => {
    if (output.length > 0) {
      document.getElementById('terminal-end')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory(1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory(-1);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autocompleteCommand();
    }
  };

  const navigateHistory = (direction: number) => {
    if (commandHistory.length === 0) return;
    
    const newIndex: number = historyIndex + direction;

    if (newIndex >= -1 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex);
      if (newIndex === -1) {
        setInput('');
      } else {
        setInput(commandHistory[newIndex]);
      }
    }
  };

  const autocompleteCommand = () => {
    if (!input) return;
    
    const args = input.split(' ');
    const command = args[0];
    
    if (args.length === 1) {
      const commands = [
        'ls', 'cd', 'cat', 'pwd', 'echo', 'clear', 'whoami', 'help', 
        'ifconfig', 'nmap', 'msfconsole', 'python', 'rm', 'mkdir',
        'find', 'grep', 'touch'
      ];
      
      const matches = commands.filter(cmd => cmd.startsWith(command));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (args.length === 2 && (command === 'cd' || command === 'cat')) {
      const path = args[1];
      const currentDir = getCurrentDirectory();

      if (currentDir && currentDir.type === 'dir') {
        const entries = Object.keys(currentDir.contents);
        const matches = entries.filter(entry => entry.startsWith(path));
        
        if (matches.length === 1) {
          setInput(`${command} ${matches[0]}`);
        }
      }
    }
  };

  const getCurrentDirectory = () => {
    const pathParts = pwd.split('/').filter(p => p);
    let current = filesystem['/root'];
    
    if (pwd === '/root') return current;
    
    for (let i = 1; i < pathParts.length; i++) {
      if (current.contents && current.contents[pathParts[i]]) {
        current = current.contents[pathParts[i]];
      } else {
        return null;
      }
    }
    
    return current;
  };

  const processCommand = (): void => {
    if (!input.trim()) {
      setInput('');
      return;
    }
    setCommandHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);
    const newOutput = [...output, { type: 'command', content: input }];
    const command = input.trim().toLowerCase();
    const result = executeCommand(command);
    if (result) newOutput.push({ type: 'output', content: result });
    newOutput.push({ type: 'system', content: getPromptString(pwd) });
    setOutput(newOutput);
    setInput('');
  };

  const executeCommand = (command: string): string | null => {
    switch (command) {
      case 'whoami':
        return resumeData.name;
      case 'resume':
        return `\n${resumeData.name}\n${resumeData.location}\n${resumeData.email}\n${resumeData.linkedin}\n${resumeData.github}\n${resumeData.website}`;
      case 'education':
        return resumeData.education;
      case 'skills':
        return `Languages:\n- ${resumeData.skills.languages.join('\n- ')}\n\nSoftware:\n- ${resumeData.skills.software.join('\n- ')}`;
      case 'experience':
        return resumeData.experience.map(exp => `\n${exp.title} @ ${exp.company} (${exp.duration})\n${exp.description.join('\n')}`).join('\n');
      case 'projects':
        return resumeData.projects.map(proj => `\n${proj.name}\n${proj.description}\nGitHub: ${proj.github}`).join('\n');
      case 'help':
        return 'Available commands: whoami, resume, education, skills, experience, projects, help, clear, history';
      case 'history':
        return commandHistory.slice(0, 10).reverse().join('\n');
      case 'clear':
        setOutput([{ type: 'system', content: getPromptString('/root') }]);
        return null;
      default:
        return `Command not found: ${command}`;
    }
  };


  // Function to render the prompt and input line correctly
  const renderTerminalLine = (line: { type: string; content: string }, index: number) => {
    if (line.type === 'command') {
      // Split the prompt into its two lines
      const promptLines = getPromptString(pwd).split('\n');
      return (
        <div key={index} className="whitespace-pre-wrap">
          <span className="text-green-500">{promptLines[0]}</span>
          <br />
          <span className="text-green-500">{promptLines[1]}</span>
          <span className="text-white">{line.content}</span>
        </div>
      );
    } else if (line.type === 'system') {
      // System output is usually the prompt
      return (
        <div key={index} className="whitespace-pre-wrap text-green-500">
          {line.content}
        </div>
      );
    } else {
      // Regular output
      return (
        <div key={index} className={
          line.type === 'error' ? "whitespace-pre-wrap text-red-500" : 
          "whitespace-pre-wrap text-white"
        }>
          {line.content}
        </div>
      );
    }
  };

  return ( 
    <div 
      className="terminal-container"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="terminal-header">
        <div className="window-controls">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-300">root@kali: ~</div>
      </div>
      
      {/* Terminal body */}
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto p-2 font-mono text-sm"
      >
        {output.map((line, index) => renderTerminalLine(line, index))}
        
        {/* Input line only after the last prompt */}
        {output.length > 0 && output[output.length - 1].type === 'system' && (
          <div className="terminal-input-line flex">
            <input 
              ref={inputRef} 
              type="text" 
              className="terminal-input bg-transparent outline-none border-none text-white flex-grow" 
              value={input} 
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown} 
              autoFocus 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KaliTerminal;