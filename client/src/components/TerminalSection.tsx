export const commands = {
    whoami: "Joseph Jatou - Software Developer | Ethical Hacker | Builder",

    resume: () => {
        return "Name: Joseph Jatou\nLocation: Kitchener Waterloo Area\nEmail: jatoujoseph@gmail.com\nLinkedIn: linkedin.com/in/josephjatou\nGitHub: github.com/sudoBaymax\nWebsite: jatou.ca";
    },

    education: () => {
        return "Wilfrid Laurier University, Waterloo, Ontario (Expected Graduation: Apr 2028)\nBachelors of Science in Computer Science, Minor in Business Administration";
    },

    skills: () => {
        return "Languages:\n- Python (6 yrs)\n- JavaScript (5 yrs)\n- Java (3 yrs)\n- C++ (2 yrs)\n- SQL (1 yr)\n- Rust (1 yr)\n\nSoftware & Tools:\n- AWS, GCP, Docker, Kubernetes\n- TensorFlow, JupyterNotebook, Selenium\n- Bootstrap, Git";
    },

    experience: () => {
        return "GLANCE - Co-Founder & Software Engineer (Nov 2024 - Present)\n- Co-founded Glance, an AI startup providing personalized eyewear recommendations.\n- Developed a full-stack web app using FastAPI, React, and MongoDB.\n- Engineered ML models detecting 7+ beauty traits (e.g., face shape, eye color).\n- Built an API for optical stores to integrate AI-powered product suggestions.\n- Designed an enterprise dashboard for inventory and white-label store management.\n- Conducted 75+ user interviews across 3 countries for market validation.\n\nWILFRID LAURIER UNIVERSITY - AI Research Intern (Sep 2024 - Jan 2025)\n- Collaborated with Dr. Emad Mohammed on AI medical diagnosis research.\n- Authored the initial draft of a benchmarking paper for segmentation models.\n- Built ML pipelines using Airflow, Docker, and ETL systems with avg. F1 score of 0.84.\n- Fine-tuned 12+ tumor detection models on 10,000+ medical images.\n- Accelerated literature review by 25% through analysis of 20+ papers.";
    },

    projects: () => {
        return "Eyewear Recommendation System | Hackathon to Startup (Jan 2025 - Present)\n- Improved face-shape model accuracy by 85%, enabling personalized fits.\n- Built AR try-on using OpenCV and Three.js; tested by 200+ student users.\n\nAnti-Phishing Chrome Extension | Published Chrome Extension (Mar 2025 - Present)\n- Developed a real-time browser extension to detect phishing attacks via DOM & UX signals.\n- Integrated AI-based URL/content analysis and instant user alerts.\n\nFind That Pokémon | Passion Project (Mar 2025 - Apr 2025)\n- Created a dark-mode Pokédex desktop app using Python & CustomTkinter.\n- Built a CNN classifier (95% accuracy) to recognize Pokémon in real-world images.\n- Features included stat visualization, autocomplete, and CSV-backed storage.\n\nTinder for Roommates | Hackathon and Mobile App (Aug 2024 - Sep 2024)\n- Built a React Native mobile app for student roommate matching.\n- Used TypeScript, Vite, and MongoDB; implemented swipe UI and matching algorithm.";
    },

    activities: () => {
        return "Event Judge - FBLA CNLC Tech Competition (Jan 2025 - Mar 2025)\nIncubator Entrepreneur - Velocity Incubator (Sep 2025 - Present)\nChoir Singer - Angels Choir, Good Shepherd Chaldean Cathedral (Feb 2016 - Dec 2023)";
    },

    hackathon: () => {
        return "🥷 HackKW 2025 (coming soon)\n- In-person hackathon for 100-150 builders.\n- Connects hackers, VCs, founders, and reporters.\n- A space for misfits who build cool sh*t.";
    },

    easteregg: "👀 You found an Easter Egg!\nRun `cat welcome.txt` in the other terminal 😉",

    banner: () => {
        return `
██████╗ ██╗      █████╗ ███╗   ██╗ ██████╗███████╗
██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝██║     ███████║██╔██╗ ██║██║     █████╗  
██╔═══╝ ██║     ██╔══██║██║╚██╗██║██║     ██╔══╝  
██║     ███████╗██║  ██║██║ ╚████║╚██████╗███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝

Type 'help' to get started.`;
    },

    clear: () => "",

    help: () => {
        return `Available commands:
whoami       - Show current user
resume       - Show resume information
education    - Show education background
skills       - Show technical skills
experience   - Show work experience
projects     - List featured projects
activities   - Show extracurricular activities
hackathon    - Info about upcoming hackathon
banner       - Show the terminal banner
easteregg    - Just for fun 👀
clear        - Clear terminal history`;
    }
};