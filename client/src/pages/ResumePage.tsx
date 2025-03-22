import React from 'react';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
        <iframe 
          src="/assets/your_resume.pdf" 

        width="100%" 
        height="800px" 
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;
