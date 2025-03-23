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
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory(1);
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
      // Just clear input and return if empty
      setInput('');
      return;
    }
    
    // Add command to history
    setCommandHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);
    
    // Create a new array with the current command (don't modify existing output)
    const newOutput = [...output];
    
    // For visual clarity, remove the last line if it's a prompt
    // This prevents doubled prompts in the display
    if (newOutput.length > 0 && newOutput[newOutput.length - 1].type === 'system') {
      // We're going to replace this with the command line
      newOutput.pop();
    }
    
    // Add the command with the current prompt
    newOutput.push({ type: 'command', content: input });
    
    // Process command
    const args = input.split(' ');
    const command = args[0].toLowerCase();
    const result = executeCommand(command, args.slice(1));
    
    // Add command output
    if (Array.isArray(result)) {
      result.forEach(line => {
        newOutput.push({ type: 'output', content: line });
      });
    } else if (result !== null) {
      newOutput.push({ type: 'output', content: result });
    }
    
    // Add new prompt - just once
    newOutput.push({ type: 'system', content: getPromptString(pwd) });
    
    // Update all output at once to prevent partial rendering
    setOutput(newOutput);
    setInput('');
  };

  const executeCommand = (command: string, args: string[]): string | string[] | null => {
    switch (command) {
      case 'help':
        return [
          'Available commands:',
          'ls [dir]     - List directory contents',
          'cd [dir]     - Change directory',
          'pwd          - Print working directory',
          'cat [file]   - Display file contents',
          'clear        - Clear terminal screen',
          'echo [text]  - Display text',
          'whoami       - Display current user',
          'ifconfig     - Display network configuration',
          'nmap [opts]  - Network scanner',
          'msfconsole   - Start Metasploit Framework',
          'python       - Run Python interpreter',
          'help         - Display this help message'
        ];
        
      case 'ls': {
        const dirPath: string = args.length > 0 && !args[0].startsWith('-') ? args[0] : pwd;

        const showHidden = args.includes('-a') || args.includes('-la') || args.includes('-al');
        const longFormat = args.includes('-l') || args.includes('-la') || args.includes('-al');
        
        const targetDir = getCurrentDirectory();

        if (!targetDir || targetDir.type !== 'dir') {
          return `ls: cannot access '${dirPath}': No such file or directory`;
        }
        
        let files = Object.keys(targetDir.contents);
        if (!showHidden) {
          files = files.filter(f => !f.startsWith('.'));
        }
        
        if (longFormat) {
          const now = new Date();
          const dateStr = now.toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
          
          return files.map(file => {
            const isDir = targetDir.contents[file].type === 'dir';
            return `${isDir ? 'd' : '-'}rw-r--r-- 1 root root ${isDir ? 4096 : 1024} ${dateStr} ${file}${isDir ? '/' : ''}`;
          });
        } else {
          return files.length > 0 ? files.join('  ') : '';
        }
      }
      case 'cd':
        if (args.length === 0 || args[0] === '~') {
          setPwd('/root');
          return '';
        }
        
        const path: string = args[0];

        let newPath = pwd;
        
        if (path === '..') {
          const pathParts = pwd.split('/').filter(p => p);
          if (pathParts.length > 1) {
            newPath = '/' + pathParts.slice(0, -1).join('/');
          } else {
            newPath = '/';
          }
        } else if (path.startsWith('/')) {
          newPath = path;
        } else {
          newPath = pwd === '/' ? `/${path}` : `${pwd}/${path}`;
        }
        
        // Navigate to /root if needed
        if (newPath === '/root' || newPath === '/') {
          setPwd('/root');
          return '';
        }
        
        // Check if path exists
        const pathParts: string[] = newPath.split('/').filter(p => p);

        let current = filesystem['/root'];
        
        for (let i = 1; i < pathParts.length; i++) {
          if (current.contents && current.contents[pathParts[i]] && current.contents[pathParts[i]].type === 'dir') {
            current = current.contents[pathParts[i]];
          } else {
            return `cd: ${path}: No such file or directory`;
          }
        }
        
        setPwd(newPath);
        return '';
        
      case 'pwd':
        return pwd;
        
      case 'cat':
        if (args.length === 0) {
          return 'cat: missing file operand';
        }
        
        const filePath: string = args[0];
        const currentDir = getCurrentDirectory();

        if (!currentDir) return `cat: ${filePath}: No such file or directory`;
        
        if (currentDir.contents && currentDir.contents[filePath]) {
          const file = currentDir.contents[filePath];
          if (file.type === 'file') {
            return file.content;
          } else {
            return `cat: ${filePath}: Is a directory`;
          }
        } else {
          return `cat: ${filePath}: No such file or directory`;
        }
        
      case 'clear':
        setOutput([
          { type: 'system', content: getPromptString(pwd) }
        ]);
        return null;
        
      case 'echo':
        return args.join(' ');
        
      case 'whoami':
        return 'root';
        
      case 'ifconfig':
        return [
          'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500',
          '        inet 192.168.1.5  netmask 255.255.255.0  broadcast 192.168.1.255',
          '        inet6 fe80::216:3eff:fe74:5e9a  prefixlen 64  scopeid 0x20<link>',
          '        ether 00:16:3e:74:5e:9a  txqueuelen 1000  (Ethernet)',
          '        RX packets 8723  bytes 1282675 (1.2 MiB)',
          '        RX errors 0  dropped 0  overruns 0  frame 0',
          '        TX packets 8128  bytes 1221227 (1.1 MiB)',
          '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0',
          '',
          'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536',
          '        inet 127.0.0.1  netmask 255.0.0.0',
          '        inet6 ::1  prefixlen 128  scopeid 0x10<host>',
          '        loop  txqueuelen 1000  (Local Loopback)',
          '        RX packets 1652  bytes 152384 (148.8 KiB)',
          '        RX errors 0  dropped 0  overruns 0  frame 0',
          '        TX packets 1652  bytes 152384 (148.8 KiB)',
          '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0'
        ];

      case 'nmap':
        if (args.length === 0) {
          return 'Usage: nmap [Scan Type] [Options] {target specification}';
        }
        
        // Simulate a basic nmap scan
        const target = args[args.length - 1];
        if (args.includes('-sV')) {
          return [
            `Starting Nmap 7.93 ( https://nmap.org ) at ${new Date().toLocaleString()} EDT`,
            `Nmap scan report for ${target}`,
            'Host is up (0.0042s latency).',
            'PORT     STATE SERVICE VERSION',
            '22/tcp   open  ssh     OpenSSH 8.4p1 Debian 5 (protocol 2.0)',
            '80/tcp   open  http    Apache httpd 2.4.53 ((Debian))',
            '443/tcp  open  https   Apache httpd 2.4.53 ((Debian))',
            '8080/tcp open  http    NodeJS Express 4.17.1',
            'Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel',
            '',
            'Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .',
            `Nmap done: 1 IP address (1 host up) scanned in ${Math.floor(Math.random() * 5) + 2}.${Math.floor(Math.random() * 60)} seconds`
          ];
        } else {
          return [
            `Starting Nmap 7.93 ( https://nmap.org ) at ${new Date().toLocaleString()} EDT`,
            `Nmap scan report for ${target}`,
            'Host is up (0.0042s latency).',
            'Not shown: 996 closed tcp ports (conn-refused)',
            'PORT     STATE SERVICE',
            '22/tcp   open  ssh',
            '80/tcp   open  http',
            '443/tcp  open  https',
            '8080/tcp open  http-proxy',
            '',
            `Nmap done: 1 IP address (1 host up) scanned in ${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 60)} seconds`
          ];
        }
        
      case 'msfconsole':
        return [
          'Metasploit Framework 6.2.33-dev                        ',
          '                                                        ',
          '       =[ metasploit v6.2.33-dev                     ]',
          '+ -- --=[ 2265 exploits - 1201 auxiliary - 398 post ]',
          '+ -- --=[ 951 payloads - 45 encoders - 11 nops      ]',
          '+ -- --=[ 9 evasion                                 ]',
          '',
          'Metasploit tip: After running db_nmap, you can list hosts using hosts and services using services',
          '',
          'msf6 > ',
          'No active session - type help for available commands'
        ];

      case 'python':
        if (args.length === 0) {
          return [
            'Python 3.10.8 (main, Oct 24 2022, 10:07:16) [GCC 12.2.0] on linux',
            'Type "help", "copyright", "credits" or "license" for more information.',
            '>>> import this',
            'The Zen of Python, by Tim Peters',
            '',
            'Beautiful is better than ugly.',
            'Explicit is better than implicit.',
            'Simple is better than complex.',
            'Complex is better than complicated.',
            'Flat is better than nested.',
            'Sparse is better than dense.',
            'Readability counts.',
            "Special cases aren't special enough to break the rules.",
            'Although practicality beats purity.',
            'Errors should never pass silently.',
            'Unless explicitly silenced.',
            'In the face of ambiguity, refuse the temptation to guess.',
            "There should be one-- and preferably only one --obvious way to do it.",
            "Although that way may not be obvious at first unless you're Dutch.",
            'Now is better than never.',
            'Although never is often better than *right* now.',
            "If the implementation is hard to explain, it's a bad idea.",
            "If the implementation is easy to explain, it may be a good idea.",
            "Namespaces are one honking great idea -- let's do more of those!",
            '>>> exit()',
            'Use exit() or Ctrl-D (i.e. EOF) to exit'
          ];
        } else {
          return 'Python script execution simulated';
        }

      default:
        if (['mkdir', 'touch', 'rm', 'find', 'grep'].includes(command)) {
          return `${command}: command simulation not implemented`;
        }
        return `${command}: command not found`;
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