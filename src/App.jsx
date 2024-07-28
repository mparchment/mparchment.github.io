import './App.css'
import RoleCard from './RoleCard';
import GitHubIcon from './assets/github.svg'
import LinkedInIcon from './assets/linkedin.svg'
import Resume from './assets/resume.pdf'
import ELKImage from './assets/elk.jpg'
import DocAIImage from './assets/docai.jpg'
import MCCImage from './assets/mcc.jpg'
import AnimatedSphere from './AnimatedSphere';

function App() {

  return (
    <>
      <div className="page-wrapper">
        <div className="left-wrapper">
          <h1 className="name-heading">Michael Parchment</h1>
          <p className="title">Software Engineer & Web Developer</p>
          <ul className="social-links">
            <li>
              <a href="https://github.com/mparchment">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mparchment/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={Resume}>
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="right-wrapper">
          <div className="intro">
            <p>Hi! I am software engineer currently working at DocAI. My job involves setting up cutting-edge logging systems with Elasticsearch, Logstash, and Docker, and creating intuitive user interfaces using React, Redux, and TypeScript.</p>
            <p>In addition to that, I also handle web development as a volunteer at MCC, focusing on optimizing WordPress sites, developing custom themes, and improving performance. I’m passionate about tackling challenges and finding creative solutions. I’d love to chat about how my background and skills could be a great fit for your team!</p>
          </div>
          <h2>Experience</h2>
          <div className="role-list">
            <RoleCard 
              date="2024 — Present"
              title="Software Engineer · DocAI"
              description="At DocAI, a telehealth startup connecting users to providers through a chat interface, I spearheaded centralized logging with Elasticsearch, Logstash, and Docker, and collaborated with other developers to build on the frontend using React, Redux, and TypeScript. I was also responsible for testing on the the Django backend, including mocking all external API calls. Additionally, I contributed to writing extensive documentation for our software architechture."
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
        </div>
      </div>
      <div className="overlay"/>
    </>
  )
}

export default App

