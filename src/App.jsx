import './App.css'
import RoleCard from './RoleCard';
import GitHubIcon from './assets/github.svg'
import LinkedInIcon from './assets/linkedin.svg'
import Resume from './assets/resume.pdf'
import ELKImage from './assets/elk.jpg'
import DocAIImage from './assets/docai.jpg'
import MCCImage from './assets/mcc.jpg'

function App() {

  return (
    <div className="page-wrapper">
      <div className="left-wrapper">
        <h1 className="name-heading">Michael Parchment</h1>
        <h2>Software Engineer at DocAI</h2>
        <p> Hi! I'm Michael Parchment and I currently work as a Software Engineer at DocAI. I'm also a certified Databricks Data Engineer.</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/mparchment">
              <img src={GitHubIcon} alt="GitHub" height="20px"/>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mparchment/">
              <img src={LinkedInIcon} alt="LinkedIn" height="20px"/>  
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="right-wrapper">
        <h2>About</h2>
        <div className="intro">
          <p>I graduated with a Bachelor of Science in Computer Science from the University of Maryland, Baltimore County. </p><p>Currently, I work as a Software Engineer at DocAI. My role involves spearheading the setup of centralized logging with Elasticsearch, Logstash, and Docker, enhancing frontend interfaces with React, Redux, and TypeScript, and optimizing testing and infrastructure migrations.</p><p> I am also a Web Developer at MCC, where I focus on WordPress site maintenance, theme development, and performance optimization. </p>
        </div>
        <h2>Experience</h2>
        <div className="role-list">
          <RoleCard 
            date="2024 — Present"
            title="Software Engineer · DocAI"
            description="At DocAI, a telehealth startup connecting users to doctors through a chat interface, I spearheaded centralized logging with Elasticsearch, Logstash, and Docker, and collaborated with other developers to build on the frontend using React, Redux, and TypeScript. I was also responsible for testing on the the Django backend, including mocking all external API calls. Additionally, I contributed to writing extensive documentation for our architechture."
            techList={["JavaScript", "TypeScript", "Python", "Django", "Azure", "Elasticsearch", "Logstash", "Docker"]}
            link="https://www.docai.us/"
            image={DocAIImage}
          />
          <RoleCard 
            date="2023 — 2024"
            title="Web Developer · MCC"
            description="At MCC, I maintained and enhanced multiple WordPress websites with  continuous uptime and up-to-date content. I developed and implemented custom WordPress themes and mobile-friendly templates, driving increased website traffic, lead generation, and alignment with site design and branding goals. Through performance optimization for speed, scalability, and improved search engine visibility, I achieved reduced page load times and higher user engagement, resulting in increased organic traffic. I also provided technical support and training to staff, ensuring proficient website usage."
            techList={["WordPress", "PHP", "HTML", "CSS", "Google Analytics"]}
            link="https://mccmd.org/"
            image={MCCImage}
          />
        </div>
        <div className="resume-link-div">
          <a href={Resume}>View Full Resume</a>
          <span className="arrow-link">↗</span>
        </div>
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <div className="project-image">
              <img src={ELKImage} alt="ELK-Fleet" />
            </div>
            <div className="project-description">
              <h3 className="project-title"><a href="https://github.com/mparchment/elk-fleet">ELK-Fleet</a></h3>
              <p>
                I customized a barebones Elastic Stack setup to run on Docker with pre-configured SSL/TLS certificates. This was designed to meet the needs of organizations requiring fast and secure centralized logging, enabling immediate deployment. Unified data collection through Elastic Fleet and Elastic Agents was integrated to streamline operations and eliminate the necessity for separate Beats installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

