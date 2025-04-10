// These imports are used by the ReactTerminal component in other files
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactTerminal } from "react-terminal";

// commands object is exported and used by the terminal component
export const commands = {
  whoami: "Joseph Jatou - Software Developer | Ethical Hacker | Builder",
  
  resume: `Name: Joseph Jatou
Location: Kitchener Waterloo Area
Email: jatoujoseph@gmail.com
LinkedIn: linkedin.com/in/josephjatou
GitHub: github.com/sudoBaymax
Website: jatou.ca
`,

  education: "Wilfrid Laurier University, BSc Computer Science, Minor in Business (Expected 2028)",

  skills: `- C++ (2yrs)
- Java (3yrs)
- SQL (1yr)
- Rust (1yr)

Software & Tools:
- AWS, GCP, Langchain, Docker, Kubernetes
- TensorFlow, Jupyter Notebook, Selenium
- Git, Bash, Bootstrap
`,

  experience: `GLANCE - Co-Founder & Software Engineer (Nov 2024 - Present)
- Built a FARM stack app for AI-driven eyewear recommendations.
- Created ML models for beauty feature detection (17+ features).
- Built dashboards, APIs, and handled market validation (14+ stores).

Wilfrid Laurier University - AI Research Intern (Sep 2024 - Jan 2025)
- Worked on medical image segmentation.
- Built ML pipelines using Docker, Airflow, ETL.
- Published paper on tumor detection models with 92% accuracy.
`,

  projects: `Eyewear Recommendation System
- ML & AR-powered AI tool to find ideal glasses.
- GitHub: github.com/sudoBaymax

SpearPhish - Anti-Phishing Chrome Extension
- Detects phishing using AI + browser integration.
- GitHub: github.com/sudoBaymax/spearphish

Find That Pokémon!
- TensorFlow-powered Pokémon image classifier.
- GitHub: github.com/sudoBaymax/pokemon-finder
`,

  hackathon: `🥷 HackKW 2025 (coming soon)
- In-person hackathon for 100-150 builders.
- Connects hackers, VCs, founders, and reporters.
- A space for misfits who build cool sh*t.
`,

  easteregg: "👀 You found an Easter Egg!\nRun `cat welcome.txt` in the other terminal 😉",

  banner: `██████╗ ██╗      █████╗ ███╗   ██╗ ██████╗███████╗
██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝██║     ███████║██╔██╗ ██║██║     █████╗  
██╔═══╝ ██║     ██╔══██║██║╚██╗██║██║     ██╔══╝  
██║     ███████╗██║  ██║██║ ╚████║╚██████╗███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
Type 'help' to get started.
`,

  clear: () => "",

  help: `Available commands:
whoami       - Show current user
resume       - Show resume information
education    - Show education background
skills       - Show technical skills
experience   - Show work experience
projects     - List featured projects
hackathon    - Info about upcoming hackathon
banner       - Show the terminal banner
easteregg    - Just for fun 👀
clear        - Clear terminal history
`
};

