import './App.css'
import RoleCard from './RoleCard';

function App() {

  return (
    <div className="page-wrapper">
      <div className="left-wrapper">
        <h1 className="name-heading">Michael Parchment</h1>
        <h2>Software Engineer at DocAI</h2>
        <p>Hey, I am Michael Parchment. I build pixel-perfect, engaging, and accessible digital experiences.</p>
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/mparchment/">LinkedIn</a></li>
          <li><a href="https://github.com/mparchment">GitHub</a></li>
        </ul>
      </div>
      <div className="right-wrapper">
        <div className="intro">
          <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
          <p>My main focus these days is building products and leading projects for our clients at Upstatement. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
          <p>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.</p>
        </div>
        <div className="role-list">
          <RoleCard 
            date="2024 — Present"
            title="Founding Engineer · DocAI"
            description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools."
            techList={["JavaScript", "TypeScript", "Python", "Django", "Azure"]}
          />
          <RoleCard 
            date="2022 — Present"
            title="Fullstack Developer · MCC"
            description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools."
            techList={["JavaScript", "TypeScript", "HTML & CSS"]}
          />
        </div>
      </div>
    </div>
  )
}

export default App

