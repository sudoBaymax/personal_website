import React, { useEffect } from 'react';

import '../styles/Terminal.css'
import './terminalPage.css'
import 'boxicons'
import Terminal from '../components/Terminal.tsx'

function TerminalPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className="terminal-page-wrapper">
            <div className="terminal-functional">
                <Terminal />
            </div>
            

            <div className="terminal-explain">
                <h1>Welcome to Shell</h1>

                <h2>






                If you’re not technical, that’s completely fine!

                the window on your left is a terminal (glorified text editor), just type in “help” to see the available commands.

                HINT: there is an easter egg command that does something really cool (first 15 people to find it get a starbucks giftcard for 15 Chinese Yen ¥)

                You also get a giftcard if you give me a SWE internship :)

                </h2>


            </div>
        </div>
    );
}

export default TerminalPage;
