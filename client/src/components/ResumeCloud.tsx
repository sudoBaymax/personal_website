import React, { CSSProperties } from 'react';

const resumeData = {
  contact: "Joseph Jatou | Kitchener Waterloo Area | jatoujoseph@gmail.com | LinkedIn.com/in/josephjatou | GitHub.com/sudoBaymax | jatou.ca",
  skills: [
    "Python (6 yrs)", "JavaScript (5 yrs)", "Java (3 yrs)", "C++ (2 yrs)", "SQL (1 yr)", "Rust (1 yr)",
    "AWS", "GCP", "Docker", "Kubernetes", "TensorFlow", "JupyterNotebook", "Selenium", "Bootstrap", "Git"
  ],
  experience: [
    {
      title: "Co-Founder & Software Engineer",
      date: "Nov 2024 - Present",
      company: "GLANCE, Waterloo, ON",
      details: [
        "Co-founded Glance, an AI startup providing personalized eyewear recommendations.",
        "Developed a full-stack web app using FastAPI, React, and MongoDB.",
        "Engineered ML models detecting 7+ beauty traits (e.g., face shape, eye color).",
        "Built an API for optical stores to integrate AI-powered product suggestions.",
        "Designed an enterprise dashboard for inventory and white-label store management.",
        "Conducted 75+ user interviews across 3 countries for market validation."
      ]
    },
    {
      title: "AI Research Intern - Github HeHeHaHa",
      date: "Sep 2024 - Jan 2025",
      company: "Wilfrid Laurier University, Waterloo, ON",
      details: [
        "Collaborated with Dr. Emad Mohammed on AI medical diagnosis research.",
        "Authored the initial draft of a benchmarking paper for segmentation models.",
        "Built ML pipelines using Airflow, Docker, and ETL systems with avg. F1 score of 0.84.",
        "Fine-tuned 12+ tumor detection models on 10,000+ medical images.",
        "Accelerated literature review by 25% through analysis of 20+ papers."
      ]
    }
  ],
  projects: [
    {
      title: "Eyewear Recommendation System | Hackathon to Startup (~900+ hours)",
      github: "da fudge",
      date: "Jan 2025 - Present",
      details: [
        "Improved face-shape model accuracy by 85%, enabling personalized fits.",
        "Built AR try-on using OpenCV and Three.js; tested by 200+ student users."
      ]
    },
    {
      title: "Anti-Phishing Chrome Extension | Published Chrome Extension (~80 hours)",
      github: "hehe",
      date: "Mar 2025 - Present",
      details: [
        "Developed a real-time browser extension to detect phishing attacks via DOM & UX signals.",
        "Integrated AI-based URL/content analysis and instant user alerts."
      ]
    },
    {
      title: "Find That Pokémon | Passion Project (~30 hours)",
      github: "HeHeHaHa",
      date: "Mar 2025 - Apr 2025",
      details: [
        "Created a dark-mode Pokédex desktop app using Python & CustomTkinter.",
        "Built a CNN classifier (95% accuracy) to recognize Pokémon in real-world images.",
        "Features included stat visualization, autocomplete, and CSV-backed storage."
      ]
    },
    {
      title: "Tinder for Roommates | Hackathon and Mobile App (~37 hours)",
      github: "MuaHaHa",
      date: "Aug 2024 - Sep 2024",
      details: [
        "Built a React Native mobile app for student roommate matching.",
        "Used TypeScript, Vite, and MongoDB; implemented swipe UI and matching algorithm."
      ]
    }
  ],
  education: {
    school: "Wilfrid Laurier University, Waterloo, Ontario",
    graduation: "Expected Graduation: Apr 2028",
    degree: "Bachelors of Science in Computer Science, Minor in Business Administration"
  },
  activities: [
    { name: "Event Judge - FBLA CNLC Tech Competition", date: "Jan 2025 - Mar 2025" },
    { name: "Incubator Entrepreneur - Incubator Entrepreneur", date: "Sep 2025 - Present" },
    { name: "Choir Singer - Angels Choir, Good Shepherd Chaldean Cathedral", date: "Feb 2016 - Dec 2023" }
  ]
};

const tagColors = [
  '#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#6A4C93', '#FF6F91', '#845EC2', '#00C9A7', '#FF9671', '#FFC75F'
];

function getRandomColor(index: number): string {
  return tagColors[index % tagColors.length];
}

function getRandomPosition(max: number): number {
  return Math.floor(Math.random() * max);
}

const ResumeCloud: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '600px', backgroundColor: '#1e1e1e', borderRadius: '12px', padding: '20px', color: 'white', overflow: 'hidden', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Joseph Jatou - Resume Cloud</h2>
      <div style={{ position: 'relative', width: '100%', height: '540px', border: '1px solid #444', borderRadius: '12px', backgroundColor: '#2c2c2c', overflow: 'hidden' }}>
        {/* Contact Info */}
        <div style={{ position: 'absolute', top: '5%', left: '5%', fontSize: '14px', maxWidth: '90%', color: '#ccc' }} title="Contact Information">
          {resumeData.contact}
        </div>

        {/* Skills */}
        {resumeData.skills.map((skill: string, index: number) => {
          const size = 12 + Math.floor(Math.random() * 16);
          const style: React.CSSProperties = {
            fontSize: `${size}px`,
            color: getRandomColor(index),
            position: 'absolute' as const,
            top: `${getRandomPosition(80)}%`,
            left: `${getRandomPosition(90)}%`,
            cursor: 'default',
            userSelect: 'none',
            padding: '2px 6px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s, backgroundColor 0.3s',
            whiteSpace: 'nowrap',
          };
          return (
            <div key={`skill-${index}`} style={style} title={`Skill: ${skill}`}>
              {skill}
            </div>
          );
        })}

        {/* Experience */}
        {resumeData.experience.map((exp: any, index: number) => {
          const size = 14 + Math.floor(Math.random() * 12);
          const style: React.CSSProperties = {
            fontSize: `${size}px`,
            color: getRandomColor(index + 10),
            position: 'absolute' as const,
            top: `${getRandomPosition(80)}%`,
            left: `${getRandomPosition(90)}%`,
            cursor: 'default',
            userSelect: 'none',
            padding: '4px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transition: 'transform 0.3s, backgroundColor 0.3s',
            whiteSpace: 'nowrap',
          };
          const title = `${exp.title} at ${exp.company} (${exp.date})`;
          return (
            <div key={`exp-${index}`} style={style} title={title}>
              {exp.title}
            </div>
          );
        })}

        {/* Projects */}
        {resumeData.projects.map((proj: any, index: number) => {
          const size = 12 + Math.floor(Math.random() * 14);
          const style: React.CSSProperties = {
            fontSize: `${size}px`,
            color: getRandomColor(index + 20),
            position: 'absolute' as const,
            top: `${getRandomPosition(80)}%`,
            left: `${getRandomPosition(90)}%`,
            cursor: 'default',
            userSelect: 'none',
            padding: '2px 6px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s, backgroundColor 0.3s',
            whiteSpace: 'nowrap',
          };
          return (
            <div key={`proj-${index}`} style={style} title={`${proj.title} (${proj.date})`}>
              {proj.title}
            </div>
          );
        })}

        {/* Education */}
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', fontSize: '14px', maxWidth: '90%', color: '#ccc' }} title="Education">
          {resumeData.education.school} - {resumeData.education.degree} (Expected Graduation: {resumeData.education.graduation})
        </div>

        {/* Activities */}
        {resumeData.activities.map((act: any, index: number) => {
          const size = 12 + Math.floor(Math.random() * 14);
          const style: React.CSSProperties = {
            fontSize: `${size}px`,
            color: getRandomColor(index + 30),
            position: 'absolute' as const,
            top: `${getRandomPosition(80)}%`,
            left: `${getRandomPosition(90)}%`,
            cursor: 'default',
            userSelect: 'none',
            padding: '2px 6px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s, backgroundColor 0.3s',
            whiteSpace: 'nowrap',
          };
          return (
            <div key={`act-${index}`} style={style} title={`${act.name} (${act.date})`}>
              {act.name}
            </div>
          );
        })}
      </div>
      <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.9rem', color: '#bbb' }}>
        Hover over tags to see details. Tags are randomly positioned for a dynamic cloud effect.
      </p>
    </div>
  );
};

export default ResumeCloud;
