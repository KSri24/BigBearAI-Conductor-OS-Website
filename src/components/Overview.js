import React, { useState, useEffect, useRef } from 'react';
import './Overview.css';

const Section = ({ children, className, sectionRef }) => {
  return (
    <div className={`section ${className}`} ref={sectionRef}>
      {children}
    </div>
  );
};

const Overview = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overview">
      <Section
        className="section-1"
        sectionRef={(el) => (sectionRefs.current[0] = el)}
      >
        <h2 className="heading">The Challenge</h2>
        <p>
          Massive amounts of data are available to be leveraged by operators to increase
          situational awareness and make critical decisions; however, this data is typically
          sourced from different systems/sensors and is in various formats. This surplus of
          data cannot easily be processed in real-time; delays caused by limited bandwidth,
          incompatible systems, lack of open data formats, and intermittent communications
          lead to significant delays in critical data availability.
        </p>
      </Section>

      <Section
        className="section-2"
        sectionRef={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="text-content">
          <h2 className="heading">The Solution</h2>
          <p className="heading">
            ConductorOS (cOS) software runs as a distributed system for AI inference to occur
            where the data is collected, so that key information and alerts can be provided to the
            operator in real-time for critical decision-making. It enables operators to make rapid
            decisions in complex environments at the edge by providing the orchestration of
            third-party sensors, data, and AI/ML in near real-time.
          </p>
          <div className="dropdown-container">
            <button onClick={() => handleToggle('AI')} className="dropdown-toggle">
              AI Orchestration
            </button>
            <button onClick={() => handleToggle('Data')} className="dropdown-toggle">
              Data Orchestration
            </button>
            <button onClick={() => handleToggle('Sensor')} className="dropdown-toggle">
              Sensor Fusion
            </button>
          </div>
          <div className="dropdown-content">
          {activeSection === 'AI' && (
            <div className="ai-content">
            <div className="ai-content-grid">
  <div className="ai-item">
    <p>
      <strong>1. Integration of Multiple AI Models and Systems:</strong><br />
      ConductorOS combines different AI models, such as machine learning, natural language processing, 
      and computer vision systems, to work together seamlessly. The orchestration ensures that data flows 
      between these systems occur in a coordinated manner, optimizing performance and reducing inefficiencies.
    </p>
  </div>
  <div className="ai-item">
    <p>
      <strong>2. Resource Allocation and Management:</strong><br />
      Efficient management of computational resources, such as CPU, GPU, and memory resources, is a crucial 
      component. ConductorOS allocates these edge resources judiciously to various AI tasks to maximize 
      throughput and minimize cost and latency.
    </p>
  </div>
  <div className="ai-item">
    <p>
      <strong>3. Scaling and Adaptability:</strong><br />
      ConductorOS can scale to meet the demands of different environments and adapt to changing conditions 
      in real-time, making it highly flexible for various applications.
    </p>
  </div>
  <div className="ai-item">
    <p>
      <strong>4. Monitoring and Maintenance:</strong><br />
      Continuous monitoring and proactive maintenance ensure that AI systems remain operational and perform 
      at their best, with minimal downtime.
    </p>
  </div>
</div>
</div>

)}

            {activeSection === 'Data' && <p>Here's some exciting info about Data Orchestration!</p>}
            {activeSection === 'Sensor' && <p>Discover the amazing world of Sensor Fusion here!</p>}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Overview;
