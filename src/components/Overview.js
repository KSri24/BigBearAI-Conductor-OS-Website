import React, { useEffect, useRef, useState } from 'react';
import './Overview.css';

const Section = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`section ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Overview = () => {
  const [showAI, setShowAI] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showSensor, setShowSensor] = useState(false);

  const toggleAI = () => setShowAI(!showAI);
  const toggleData = () => setShowData(!showData);
  const toggleSensor = () => setShowSensor(!showSensor);

  return (
    <div className="overview">
      <Section className="section-1">
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

      <Section className="section-2">
      <div className="text-content">
        <h2 className="heading">The Solution</h2>
        <p>
          ConductorOS (cOS) software runs as a distributed system for AI inference to occur
          where the data is collected, so that key information and alerts can be provided to the
          operator in real-time for critical decision-making. It enables operators to make rapid
          decisions in complex environments at the edge by providing the orchestration of
          third-party sensors, data, and AI/ML in near real-time.
        </p>
        </div>
        <div className="dropdown-container">
          <div className="dropdown-item">
            <button onClick={toggleAI} className="dropdown-toggle">
              AI Orchestration
            </button>
            {showAI && <div className="dropdown-content">This is some cool info about AI Orchestration!</div>}
          </div>

          <div className="dropdown-item">
            <button onClick={toggleData} className="dropdown-toggle">
              Data Orchestration
            </button>
            {showData && <div className="dropdown-content">Here's some exciting info about Data Orchestration!</div>}
          </div>

          <div className="dropdown-item">
            <button onClick={toggleSensor} className="dropdown-toggle">
              Sensor Fusion
            </button>
            {showSensor && <div className="dropdown-content">Discover the amazing world of Sensor Fusion here!</div>}
          </div>
        </div>
      </Section>

      {/* <Section className="section-3">
        <h2 className="heading">AI Orchestration Data Orchestration Sensor Fusion</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <div className="dropdown-container">
          <div className="dropdown-item">
            <button onClick={toggleAI} className="dropdown-toggle">
              AI Orchestration
            </button>
            {showAI && <div className="dropdown-content">1. Integration of Multiple AI Models
and Systems: ConductorOS combines
different AI models, such as machine
learning, natural language processing,
and computer vision systems, to work
together seamlessly. The orchestration
ensures that data flows between these
systems occur in a coordinated
manner, optimizing performance and
reducing inefficiencies.</div>}
          </div>

          <div className="dropdown-item">
            <button onClick={toggleData} className="dropdown-toggle">
              Data Orchestration
            </button>
            {showData && <div className="dropdown-content">Here's some exciting info about Data Orchestration!</div>}
          </div>

          <div className="dropdown-item">
            <button onClick={toggleSensor} className="dropdown-toggle">
              Sensor Fusion
            </button>
            {showSensor && <div className="dropdown-content">Discover the amazing world of Sensor Fusion here!</div>}
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default Overview;
