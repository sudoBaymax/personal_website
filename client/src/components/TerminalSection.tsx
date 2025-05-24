export const commands = {
    whoami: "Joseph Jatou – Dev, Hacker, Builder.",
  
    resume: () => {
      return `Joseph Jatou\n📍 Kitchener-Waterloo\n📧 jatoujoseph@gmail.com\n🔗 linkedin.com/in/josephjatou\n🐙 github.com/sudoBaymax\n🌐 jatou.ca`;
    },
  
    education: () => {
      return `Wilfrid Laurier University (Apr 2028)\nBSc Computer Science, Minor in Business`;
    },
  
    skills: () => {
      return `Languages: Python, JavaScript, Java, C++, SQL, Rust\nTools: AWS, GCP, Docker, K8s, TensorFlow, Git, Bootstrap, Jupyter`;
    },
  
    experience: () => {
        return `GLANCE – Co-Founder (Nov 2024–Now): Built AI eyewear recommendation app using FastAPI, React, and MongoDB. Developed face-shape ML and in-store tools.
      
      Laurier – AI Research Intern (Sep 2024–Jan 2025): Built tumor detection ML pipelines with Airflow and Docker. Drafted paper and accelerated research workflows.
      
      Voyzi – Software Engineer Intern (May 2025–Now): Developing anti-drunk driving backend with Fastify, TypeScript, and Redis. Focused on performance and safety.`;
      },
      
  
    projects: () => {
      return `Eyewear Recommender (Jan 2025)\n• Improved face model accuracy by 85%\n• Built AR try-on with OpenCV + Three.js
  
  Phishing Guard Chrome Extension (Mar 2025)\n• Real-time phishing detector with AI alerts
  
  Find That Pokémon (Mar–Apr 2025)\n• Pokédex app + CNN image classifier (95% acc.)
  
  Roommate Matcher (Aug–Sep 2024)\n• Swipe-based React Native app to find roommates`;
    },
  
    activities: () => {
      return `🧑‍⚖️ Judge – FBLA Tech (Jan–Mar 2025)\n🚀 Founder – Velocity Incubator (Sep 2025–Now)\n🎤 Choir – Good Shepherd (2016–2023)`;
    },
  
    hackathon: () => {
      return `🥷 Stratos 2026 (coming soon)\n• 100–150 hackers\n• Meet VCs, founders & media\n• Build weird, fun projects`;
    },
  
    sudo_easter: "👀 Easter Egg found! Try `cat welcome.txt` 😏",
  
    banner: () => {
        return `
      ┌────────────────────────────────────────────┐
      │  ⚡ Joseph Jatou – Software Engineer       │
      │  🧠 Dev | 🔐 Hacker | 🚀 Builder             │
      │  🌐 jatou.ca   🐙 github.com/sudoBaymax    │
      │  💼 Intern @ Voyzi                         │
      └────────────────────────────────────────────┘
      
      > Type 'help' to explore the system.
        `;
      },
      

  
    clear: () => "",
  
    help: () => {
        return `Commands you can run: whoami, resume, education, skills, experience, projects, activities, hackathon, banner, clear`;
      },      
  };
  