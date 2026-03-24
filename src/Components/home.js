
import { NavLink } from "react-router-dom";
useEffect(() => {
  if (window.adobe && window.adobe.target) {
    window.adobe.target.triggerView("subscription");
  }
}, []);
const Home = () => (
  <div
    className="container-fluid text-center py-5"
    style={{
      background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
      borderRadius: "20px",
    }}
  >
    <h1 className="display-4 fw-bold mb-3">
      Hi, I’m Prachi Sharma
    </h1>
    <p className="fs-5 text-secondary mb-4">
      Technical Product Consultant | Adobe Audience Manager 
    </p>

    <div className="d-flex justify-content-center gap-3">
      <NavLink to="/about" className="btn btn-primary btn-lg rounded-3">
        About Me
      </NavLink>
      <NavLink to="/projects" className="btn btn-outline-primary btn-lg rounded-3">
        View Projects
      </NavLink>
    </div>
  </div>
);

export default Home