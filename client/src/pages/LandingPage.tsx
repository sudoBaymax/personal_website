import React, { useEffect } from "react";
import AppStack from "../components/AppStack"; // Import the new component

function LandingPage() {
  useEffect(() => {
    // Fetch logic can be added back if needed in the future
  }, []);

  return (
    <div className="landing-wrapper flex flex-col items-center justify-center">

      {/* App Stack Animation */}
      <AppStack />
      
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-6">Elevate every interaction, <br />inspire every moment.</h1>
      <p className="text-lg text-gray-600 mb-10">
      My name is Joseph Jatou— cofounder of Glance, <br></br>HPC Software Engineer at Voltage Park
      </p>

      <div className="CTA">
          {/* Call to Action */}
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Go to Shell
          </button>

          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700" onClick={() => window.open("http://localhost:5000/resume", "_blank")}>
            Download Resume
          </button>

      </div>
    </div>
  );
}

export default LandingPage;
