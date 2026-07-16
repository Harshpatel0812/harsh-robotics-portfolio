import Link from "next/link";
import { Header, Footer, StatusDot } from "./components";

const projects = [
  {
    number: "01",
    status: "NAVIGATION / ROS 2",
    title: "Autonomous Patrol Robot",
    text: "A ROS 2 behavior-tree patrol stack with Nav2, battery recovery, and ArUco-driven transitions for reactive autonomy.",
    tags: ["C++", "BehaviorTree.CPP", "Nav2", "ArUco"],
    href: "/projects#sentry",
  },
  {
    number: "02",
    status: "DYNAMIC PATH PLANNING",
    title: "Autonomous Warehouse Robot",
    text: "Obstacle-aware warehouse navigation using D* Lite replanning and Artificial Potential Fields for reliable path updates.",
    tags: ["D* Lite", "APF", "Gazebo", "Docker"],
    href: "/projects#warehouse",
  },
  {
    number: "03",
    status: "MANIPULATION / MOVEIT",
    title: "OpenManipulator-X Planning",
    text: "Kinematics validation and repeatable joint, Cartesian, waypoint, and quintic trajectory execution with MoveIt.",
    tags: ["MoveIt", "URDF", "Python", "RRTConnect"],
    href: "/projects#manipulator",
  },
];

export default function Home() {
  return (
    <main>
      <Header active="home" />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><StatusDot /> ROBOTICS SOFTWARE ENGINEER</p>
          <h1 id="hero-title">I build intelligent robots that perceive, plan, and move.</h1>
          <p className="hero-lede">
            I’m Harsh Patel, a Robotics &amp; Autonomy M.S. candidate building ROS/ROS 2,
            C++, Python, Gazebo, and MoveIt systems for navigation, perception, and manipulation.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">Explore projects <span>→</span></Link>
            <Link className="button button-quiet" href="/resume">View résumé</Link>
          </div>
          <div className="availability"><span className="pulse" /> Open to full-time robotics software roles across the U.S.</div>
        </div>

        <div className="simulation-card" aria-label="Warehouse robot navigation simulation">
          <div className="sim-toolbar">
            <span><StatusDot /> NAVOPS // LIVE SIMULATION</span>
            <span>GAZEBO · 60 FPS</span>
          </div>
          <div className="sim-image-wrap">
            <img src="/navops-hero.png" alt="Autonomous mobile robot following a planned path through a point-cloud warehouse map" />
            <div className="sim-reticle" aria-hidden="true" />
          </div>
          <div className="sim-hud" aria-label="Simulation telemetry">
            <div><span>POSE</span><strong>x 2.45 · y −1.32</strong></div>
            <div><span>VELOCITY</span><strong>0.35 m/s</strong></div>
            <div><span>LIDAR</span><strong>360° ACTIVE</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics shell" aria-label="Technical snapshot">
        <article className="metric-card"><span className="metric-icon">⌁</span><div><small>PRIMARY STACK</small><strong>ROS 2 + Python</strong></div><StatusDot /></article>
        <article className="metric-card"><span className="metric-icon">◇</span><div><small>SPECIALIZATION</small><strong>Autonomous Nav</strong></div><StatusDot /></article>
        <article className="metric-card"><span className="metric-icon">▣</span><div><small>SIMULATION</small><strong>Gazebo</strong></div><StatusDot /></article>
      </section>

      <div className="tech-rail shell" aria-label="Technology stack">
        {["ROS 2", "C++", "Python", "Gazebo", "Nav2", "MoveIt", "OpenCV", "Docker"].map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      <section className="section shell" aria-labelledby="featured-title">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2 id="featured-title">Systems built to move from simulation to reality.</h2></div>
          <Link className="text-link" href="/projects">View all projects <span>↗</span></Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" href={project.href} key={project.number}>
              <div className="project-top"><span>{project.number}</span><small><StatusDot /> {project.status}</small></div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="project-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-strip shell">
        <div><p className="eyebrow">READY FOR THE NEXT MISSION</p><h2>Let’s build robots that work beyond the demo.</h2></div>
        <a className="button button-primary" href="mailto:harsh8121998@gmail.com">Start a conversation <span>→</span></a>
      </section>

      <Footer />
    </main>
  );
}
