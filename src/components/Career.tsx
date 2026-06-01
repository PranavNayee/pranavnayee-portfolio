import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CTO / Tech Lead</h4>
                <h5>Revereate Web</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading tech initiatives, building scalable web applications, and managing the development team to deliver high-quality products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Contributing to large-scale software development projects, optimizing system performance, and implementing innovative solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer & Digital Marketing Executive</h4>
                <h5>Revereate Capital</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed web applications and led digital marketing strategies to drive business growth and online presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
