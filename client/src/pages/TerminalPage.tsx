import React, { useEffect } from 'react';
import { ReactTerminal } from "react-terminal";
import { commands } from '../components/TerminalSection';
import './terminalPage.css';
import 'boxicons';
import '../components/TerminalSection.css';

function TerminalPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleUnknownCommand = (command: string) => {
        return `${command} command not found. Type 'help' to see available commands.`;
    };

    return (
        <div className="terminal-page-wrapper">
            <div className="terminal-functional">
                <div className="terminal-container">
                    <ReactTerminal 
                        commands={commands}
                        showControlBar={false}
                        prompt="jatou@kali:~$"
                        theme="material-dark"
                        defaultHandler={handleUnknownCommand}
                    />
                </div>
            </div>
            
            <div className="terminal-explain">
                <h1>Welcome to Shell</h1>
                <h2>
                    If you're not technical, that's completely fine!
                    The window on your left is a terminal (glorified text editor), just type in "help" to see the available commands.
                    HINT: there is an easter egg command that does something really cool (first 15 people to find it get a starbucks giftcard for 15 Chinese Yen ¥)
                    You also get a giftcard if you give me a SWE internship :)
                </h2>
            </div>
        </div>
    );
}

export default TerminalPage;
