import { NavLink } from "react-router-dom";


const Navbar = () => (

<nav
  className="py-3 shadow-sm"
  style={{
      background: "linear-gradient(135deg, #be5478, #4dabee, #c050d2)",
  }}
>
  <div className="container d-flex justify-content-between align-items-center">
    <h4 className="m-0 text-white fw-bold">Prachi Sharma</h4>

    <ul
      className="nav nav-pills gap-2 p-1 rounded-5"
      style={{
        backgroundColor: "rgba(255,255,255,0.2)",
      }}
    >
      {["/", "/about", "/projects", "/contact"].map((path, idx) => {
        const labels = ["Home", "About", "Learning", "Contact"];
        return (
          <li key={idx} className="nav-item">
            <NavLink
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `nav-link rounded-5 px-3 ${
                  isActive ? "bg-white text-dark" : "text-white"
                }`
              }
            >
              {labels[idx]}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </div>
</nav>)

export default Navbar