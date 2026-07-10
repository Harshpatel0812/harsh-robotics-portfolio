import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageIntro, StatusDot } from "../components";

export const metadata: Metadata = { title: "About", description: "About Harsh Patel, a Robotics & Autonomy M.S. candidate focused on robotics software and autonomy." };

const skills = [
  ["Programming & ROS", "Python · C++ · C · MATLAB · Bash · ROS 2 · ROS Noetic · TF/TF2 · URDF · rosbag"],
  ["Planning & Control", "A* · D* Lite · RRTConnect · PRM · KPIECE · Jacobian IK · PID · ADRC"],
  ["Manipulation", "MoveIt · OpenManipulator-X · trajectory generation · Cartesian and joint-space control"],
  ["Perception", "OpenCV · ArUco · stereo calibration · SIFT/FLANN · Harris corners · edge detection"],
  ["Hardware & CAD", "Arduino · TurtleBot3 · sensor integration · Mitsubishi GX Works2 PLC · SolidWorks"],
];

export default function AboutPage() {
  return <main><Header active="about" /><PageIntro index="03" eyebrow="OPERATOR PROFILE" title="Robotics software grounded in real hardware and production." copy="I’m Harsh Patel, a Robotics & Autonomy M.S. candidate in Philadelphia targeting entry-level Robotics Software and Autonomy roles." />
    <section className="about-grid shell">
      <div className="about-story"><p className="eyebrow"><StatusDot /> CURRENT MISSION</p><h2>Building hardware-aware autonomous systems.</h2><p>I build ROS/ROS 2, C++, and Python systems for mobile robot navigation, localization, SLAM, path planning, perception, and manipulation. My projects span TurtleBot3, OpenManipulator-X, EKF/MCL, D* Lite, MoveIt, Gazebo, RViz, and embedded controls across simulation and hardware.</p><p>Before graduate robotics, I worked in manufacturing and process engineering—supporting sensor-production workflows, CAD-based improvements, pump commissioning, prototype testing, and cross-functional production work. That experience helps me design software with real system constraints, validation, and reliability in mind.</p><div className="hero-actions"><Link className="button button-primary" href="/projects">See my work <span>→</span></Link><a className="button button-quiet" href="mailto:harsh8121998@gmail.com">Email me</a></div></div>
      <aside className="profile-panel"><div><small>BASE</small><strong>Philadelphia, PA</strong></div><div><small>EDUCATION</small><strong>M.S. Robotics and Autonomy · Expected Sep 2026</strong></div><div><small>FOCUS</small><strong>Robotics Software + Autonomy</strong></div><div><small>CONTACT</small><strong><a href="tel:+14452089961">+1 (445) 208-9961</a></strong></div><div><small>STATUS</small><strong className="online"><StatusDot /> Open to entry-level roles</strong></div></aside>
    </section>
    <section className="skills-section shell"><div className="section-heading"><div><p className="eyebrow">SYSTEM CAPABILITIES</p><h2>Tools I use to turn models into motion.</h2></div></div><div className="skills-list">{skills.map(([name, list], i) => <div key={name}><span>0{i+1}</span><h3>{name}</h3><p>{list}</p></div>)}</div></section>
    <Footer /></main>;
}
