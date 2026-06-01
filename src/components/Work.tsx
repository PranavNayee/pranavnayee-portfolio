import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      title: "SMSF Administration & Accounting Platform",
      category: "Enterprise AI-Powered SaaS • Cloud-Based • Multi-Tenant Architecture",
      tools: "React, Next.js, Node.js, PostgreSQL, WebSockets, OpenAI, Claude AI",
      description: "An enterprise-grade SaaS platform for Australian accountants, auditors, trustees, and financial advisors. Streamlines SMSF administration through automation, AI-powered workflows, compliance monitoring, and advanced financial reporting.",
      image: "/images/smsf.webp"
    },
    {
      title: "GSTR-7 Auto Filer",
      category: "GST Filing Automation • Multi-Client Processing • Audit Logs",
      tools: "Python, Selenium, Gmail API, Google Sheets, Pandas",
      description: "A complete GST return filing automation solution for tax professionals and Chartered Accountants. Automates the entire GSTR-7 filing process — reduced manual filing from several hours to just a few minutes.",
      image: "/images/gstr7.webp"
    },
    {
      title: "Eye Station Opticians Web Application",
      category: "Full Stack Business Management System • SEO Optimized",
      tools: "HTML, CSS, JavaScript, PHP, MySQL",
      description: "A full-stack web application for an optical store to manage products, appointments, and customer interactions while improving online visibility through SEO and digital marketing.",
      image: "/images/eyestation.webp"
    },
    {
      title: "Mahaveer Granite Website",
      category: "SEO Optimized Business Website • Lead Generation",
      tools: "HTML, CSS, JavaScript, Firebase Hosting",
      description: "A modern business website for Shree Mahaveer Granite to establish a strong online presence, generate leads, and improve search engine visibility through SEO best practices.",
      image: "/images/mahaveer.webp"
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
                <p>{project.description}</p>
                <h4>Tech Stack</h4>
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