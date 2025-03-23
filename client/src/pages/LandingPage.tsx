import React from "react";
import AppStack from "../components/AppStack"; // Import the new component

function LandingPage() {
  return (
      <div className="landing-wrapper flex flex-col items-center justify-center">

      {/* App Stack Animation */}
      <AppStack />
      
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-6">Elevate every interaction, inspire every moment.</h1>
      <p className="text-lg text-gray-600 mb-10">
      My name is Joseph Jatou— cofounder of Glance, Software Engineering Intern at BAREL Inc.
      </p>

      <div className="CTA">
          {/* Call to Action */}
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            &lt; Go to Shell &#47;&gt;
          </button>

          <a href="https://jatou.ca/resume/"></a><span className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Download Resume
          </span>
      </div>
    </div>
  );
}

export default LandingPage;
