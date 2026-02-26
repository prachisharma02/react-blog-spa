import React from "react";

const Contact = () => (
  <div
    className="container-fluid py-5"
    style={{
      background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
    }}
  >
    <div className="container text-center">
      <h2 className="display-5 fw-bold mb-4 text-dark">
        Get in Touch
      </h2>

      <p className="fs-5 text-secondary mb-5">
For inquiries related to Adobe Audience Manager implementations, integrations, or technical consultations, please reach out      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card border-0 shadow-lg p-4"
            style={{ borderRadius: "20px" }}
          >
            <form>
              <div className="mb-3 text-start">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <textarea
                  className="form-control form-control-lg rounded-3"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5 text-muted">
        <p className="mb-2">Email: prachi@example.com</p>
        <p className="mb-2">LinkedIn: linkedin.com/in/prachi-sharma</p>
        <p className="mb-0">Delhi, India</p>
      </div>
    </div>
  </div>
);

export default Contact;