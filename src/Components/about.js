import profileImage from "../assets/1000044856 (1).jpg";

const About = () => (
  <div
    className="container-fluid py-5"
    style={{
      background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
    }}
  >
    <div className="container">
      <h2 className="display-5 fw-bold mb-4 text-dark text-center">
        About Me
      </h2>

      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <p className="fs-5 text-secondary mb-4">
           I am Prachi Sharma, a passionate Technical Product Consultant and a member of Adobe Audience Manager (AAM).
            I have work on AAM integrations with Adobe Experience Platform Web SDK, Adobe Target, and Adobe Analytics. I am now starting a new journey focused on learning Adobe Target, and I built this website as part of that learning initiative.

          </p>

          <p className="fs-5 text-secondary mb-4">
           In my role, I handle customer queries, troubleshoot technical issues, and create knowledge articles whenever required.

          </p>

          <ul className="list-group list-group-flush bg-transparent">
            <li className="list-group-item bg-transparent">
              AAM Consultant
            </li>
            <li className="list-group-item bg-transparent">
              Web SDK Implementations
            </li>
            <li className="list-group-item bg-transparent">
              Target - In Progress
            </li>
          </ul>
        </div>
<div id="prachips-target" class="mboxDefault">
this is the custom mbox default content</div>
        <div className="col-md-6 text-center">
          <img
            src={profileImage}
            alt="Prachi Sharma"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;