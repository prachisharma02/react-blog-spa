import React from "react";
useEffect(() => {
  if (window.adobe && window.adobe.target) {
    window.adobe.target.triggerView("learning");
  }
}, []);
const Projects = () => {
  const projects = [
   {
  title: "AAM – Web SDK Integration",
  desc: "Implemented Adobe Audience Manager integration using Adobe Experience Platform Web SDK, Adobe Target, and Adobe Analytics. Tested on a fitness tracking website.",
  tech: "Adobe Audience Manager, AEP Web SDK, Adobe Target, Adobe Analytics",
},
   {
  title: "Adobe Target Implementation Learning",
  desc: "Currently exploring Adobe Target implementation concepts, including activity setup, audience targeting and User permissions",
  tech: "Adobe Target, JavaScript",
},
    {
  title: "Knowledge Articles & Documentation",
  desc: "Created detailed knowledge articles and technical documentation outlining Processes, integration steps, and troubleshooting guidelines to support customers and internal teams.",
  tech: "Adobe Audience Manager, Adobe Analytics",
}
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
      }}
    >
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-dark text-center">
Learnings        </h2>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-md-6">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  borderRadius: "20px",
                  transition: "0.3s ease",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-3">
                    {project.title}
                  </h5>
                  <p className="card-text text-secondary mb-3">
                    {project.desc}
                  </p>
                  <p className="fw-medium text-primary mb-0">
                    Tech: {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;