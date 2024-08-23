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
    const section2 = sectionRefs.current[1];
    
    if (section2) {
      section2.classList.toggle('expanded', activeSection !== section);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
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
        className={`section-1 ${isExpanded ? 'expanded' : ''}`}
        sectionRef={(el) => (sectionRefs.current[0] = el)}
      >
        <h2>The Challenge</h2>
        <p>
          Massive amounts of data are available to be leveraged by operators to increase
          situational awareness and make critical decisions; however, this data is typically
          sourced from different systems/sensors and is in various formats. This surplus of
          data cannot easily be processed in real-time; delays caused by limited bandwidth,
          incompatible systems, lack of open data formats, and intermittent communications
          lead to significant delays in critical data availability.
        </p>
        <button onClick={handleExpandToggle} className="expand-toggle">
          {isExpanded ? 'See Less' : 'See More'}
        </button>
        {isExpanded && (
          <div className="expanded-content">
            <p>
              In addition, the current state of sensor fusion is very limited with respect to data processing at
              the edge. The current path typically requires sending data from the sensor to an operations
              center for analysis and fusion, and then sending results and insights back to the very edge
              location the data originated from. These hop-skip communications add time, power, and
              computational costs – and significantly delay in time to action in theater. True whole-of-
              environment decisions cannot be made in this current state, and the recent progress with
              AI/ML models cannot be realized with the vendor-locked battlefield we face today.
            </p>
          </div>
        )}
      </Section>

      <Section
        className="section-2"
        sectionRef={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="text-content">
          <div className="heading">
            <h2>The Solution</h2>
            <p>
              ConductorOS (cOS) software runs as a distributed system for AI inference to occur
              where the data is collected, so that key information and alerts can be provided to the
              operator in real-time for critical decision-making. It enables operators to make rapid
              decisions in complex environments at the edge by providing the orchestration of
              third-party sensors, data, and AI/ML in near real-time.
            </p>
          </div>
          <div className="dropdown-container">
            <button
              onClick={() => handleToggle('AI')}
              className={`dropdown-toggle ${activeSection === 'AI' ? 'active' : ''}`}
            >
              AI Orchestration
            </button>
            <button
              onClick={() => handleToggle('Data')}
              className={`dropdown-toggle ${activeSection === 'Data' ? 'active' : ''}`}
            >
              Data Orchestration
            </button>
            <button
              onClick={() => handleToggle('Sensor')}
              className={`dropdown-toggle ${activeSection === 'Sensor' ? 'active' : ''}`}
            >
              Sensor Fusion
            </button>
          </div>
          <div className="dropdown-content">
            {activeSection === 'AI' && (
              <div className="ai-content">
                <div className="ai-content-grid">
                <div className="ai-item">
                    <p>
                      <strong>AI Orchestration:</strong><br />
                      AI Orchestration refers to the coordinated management and integration of various AI systems
and processes to achieve efficient, effective, and optimized outcomes. ConductorOS features
enable several key aspects following this section.
                    </p>
                  </div>
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
            {activeSection === 'Data' && (
              <div className="ai-content">
                <div className="ai-content-grid">
                <div className="ai-item">
                    <p>
                      <strong>Data Orchestration:</strong><br />
                      Data orchestration refers to the process of integrating and managing data from multiple
sources to ensure that it is accessible, usable, and efficiently processed across different systems
and applications in an organization. This concept is essential in complex data environments,
such as operational mission spaces, where operators need to handle vast amounts of data
stored in various formats and locations.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>1. Data Integration:</strong><br />
                      Data orchestration involves combining data from disparate sources, such
as databases, cloud storage, and IoT devices. ConductorOS enables the structuring, cleansing,
and consolidating of data as it is received at the edge, to create a unified view that can be easily
accessed and used by downstream consumers.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>2. Scalability and Flexibility:</strong><br />
                      ConductorOS is designed to be scalable and flexible,
accommodating varying data volumes and changing requirements. This adaptability is crucial
for scenarios that require flexible adaptability in data processing capabilities or adjusting to
new data sources.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>3. Monitoring and Optimization:</strong><br />
                      Continuous monitoring of the data orchestration processes is
vital to identify and resolve issues, optimize data flow, and improve overall system
performance. ConductorOS provides this functionality, tracking data movements, usage
patterns, and performance metrics.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === 'Sensor' && (
              <div className="ai-content">
                <div className="ai-content-grid">
                  <div className="ai-item">
                    <p>
                      <strong className="dropdown-name">Sensor Fusion</strong><br />
                      Sensor fusion refers to the process used in systems that collect data from multiple sensory
sources (such as cameras, radar, GPS, etc.) and combine this data into a comprehensive,
accurate, and dependable view. This technique is crucial in various applications, including
autonomous vehicles, robotics, and advanced surveillance systems, where making rapid and
reliable decisions based on accurate real-time data is essential.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>1. Data Combination & Error Reduction:</strong><br />
                      ConductorOS enables sensor fusion by combining various disparate data
streams to provide accurate perception, regardless of individual sensor limitations. By integrating data from multiple sources, ConductorOS reduces the
likelihood of error that might arise from a single sensor. This increases the overall reliability of
the sensory data, which is critical for safety in applications like autonomous driving.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>2. Improved Accuracy and Robustness:</strong><br />
                      The combined data typically provide a more accurate
representation of the environment than any single sensor could on its own. This improved
accuracy is vital for precise navigation, object detection, and decision-making processes in
automated systems. With ConductorOS, systems can also operate reliably under a wide range
of environmental and wartime conditions (i.e. low bandwidth environments). By using multiple
sensors, the system can still function even if one sensor type fails or provides poor data quality
due to environmental constraints.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>3. Contextual Awareness:</strong><br />
                      ConductorOS’ sensor fusion enables systems to understand their
environment more completely and from multiple angles and dimensions. This provides
enhanced contextual and situational awareness to the operator.
                    </p>
                  </div>
                  <div className="ai-item">
                    <p>
                      <strong>4. Algorithmic Efficiency:</strong><br />
                      Efficient processing of sensor data is key to real-time applications.
ConductorOS enables sophisticated algorithms, such as Kalman filters or neural networks, to
efficiently and effectively integrate data in a way that supports rapid decision-making.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Overview;
