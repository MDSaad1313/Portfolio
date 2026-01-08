import { useEffect, useRef, useState } from "react";

/* Frontend */
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaAngular,
} from "react-icons/fa";

/* Backend & Languages */
import { FaJava, FaNodeJs } from "react-icons/fa";

/* Databases & Tools */
import {
  SiMysql,
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiApachemaven,
  SiGooglecloud,
  SiVite,
  SiVercel,
  SiAndroidstudio,
  SiEclipseide,
} from "react-icons/si";

/* Version Control */
import { FaGitAlt, FaGithub } from "react-icons/fa";

/* C / C++ */
import { SiC, SiCplusplus } from "react-icons/si";

import "./Tools.css";

function Tools() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tools-section" ref={sectionRef}>
      <h2 className="tools-title">Tech & Tools</h2>

      <div className={`tools-grid ${show ? "show" : ""}`}>
        {/* Languages */}
        <div className="tool-item">
          <FaJava color="#f89820" />
        </div>
        <div className="tool-item">
          <SiC color="#00599C" />
        </div>
        <div className="tool-item">
          <SiCplusplus color="#004482" />
        </div>

        {/* Frontend */}
        <div className="tool-item">
          <FaHtml5 color="#e34c26" />
        </div>
        <div className="tool-item">
          <FaCss3Alt color="#1572b6" />
        </div>
        <div className="tool-item">
          <FaJs color="#f7df1e" />
        </div>
        <div className="tool-item">
          <FaBootstrap color="#7952b3" />
        </div>
        <div className="tool-item">
          <FaReact color="#61dafb" />
        </div>
        <div className="tool-item">
          <FaAngular color="#dd1b16" />
        </div>

        {/* Backend */}
        <div className="tool-item">
          <FaNodeJs color="#3c873a" />
        </div>
        <div className="tool-item">
          <SiSpringboot color="#6db33f" />
        </div>
        <div className="tool-item">
          <SiHibernate color="#59666C" />
        </div>

        {/* Database */}
        <div className="tool-item">
          <SiMysql color="#00758F" />
        </div>

        {/* Tools */}
        <div className="tool-item">
          <SiApachemaven color="#C71A36" />
        </div>
        <div className="tool-item">
          <SiPostman color="#FF6C37" />
        </div>
        <div className="tool-item">
          <FaGitAlt color="#f34f29" />
        </div>
        <div className="tool-item">
          <FaGithub color="#ffffff" />
        </div>

        {/* IDEs & Platforms */}
        <div className="tool-item">
          <SiEclipseide color="#2C2255" />
        </div>
        <div className="tool-item">
          <SiAndroidstudio color="#3DDC84" />
        </div>

        {/* Cloud & Deployment */}
        <div className="tool-item">
          <SiGooglecloud color="#4285F4" />
        </div>
        <div className="tool-item">
          <SiVite color="#646CFF" />
        </div>
        <div className="tool-item">
          <SiVercel color="#ffffff" />
        </div>
      </div>
    </section>
  );
}

export default Tools;
