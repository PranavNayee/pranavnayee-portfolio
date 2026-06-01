import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      title: "Revereate Web (CTO / Tech Lead)",
      category: "Full-Stack Web Development & Digital Marketing",
      tools: "React, Next.js, Node.js, Express, SEO, Google Analytics",
      image: "/images/react.webp"
    },
    {
      title: "SDE at Amazon",
      category: "Large-Scale Software Development",
      tools: "AWS, CI/CD, Distributed Systems, Python, Java",
      image: "/images/placeholder.webp"
    },
    {
      title: "E-Commerce Portal",
      category: "Web Development & Payment Integration",
      tools: "React, Node.js, Payment Gateway, MongoDB",
      image: "/images/javascript.webp"
    },
    {
      title: "B2B Lead Generation Platform",
      category: "Business Solution Development",
      tools: "Next.js, CRM Integration, MySQL",
      image: "/images/next1.webp"
    },
    {
      title: "Corporate Website (SEO Optimized)",
      category: "Web Design & Digital Marketing",
      tools: "HTML, CSS, JavaScript, SEO",
      image: "/images/express.webp"
    },
    {
      title: "3D Character & Environment Design",
      category: "3D Design & Animation",
      tools: "Blender, ZBrush, Rigging, Three.js",
      image: "/images/node2.webp"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;