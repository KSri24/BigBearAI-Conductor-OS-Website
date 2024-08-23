import React, { useEffect, useRef, useState } from 'react';
import './diagram.css';
import image from '../media/diagram_image.png';

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

const diagram = () => {
  return (
    <div id="diagram">
      <Section className="diagram_section-1">
        <h2 className="dHeading">Interactive Diagram</h2>
        <img className="diagramImage" src={image} width="900" height="730" alt="Diagram" />

        {/* Circle 1 */}
        <div className="circle circle-1"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Integration of Multiple Technologies, Sensors, and Systems</h2>
            <p>This section emphasizes the integration of diverse technologies, systems, and sensors within ConductorOS. 
                By connecting satellite, drone, cloud, and edge computing platforms, ConductorOS enables seamless data 
                orchestration and AI deployment. This interconnected system enhances situational awareness and 
                decision-making by processing and analyzing data from multiple sources in real-time, ensuring efficient 
                and effective operations across various environments.</p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="circle circle-2"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Cloud Computing and AI Deployment</h2>
            <p>This part focuses on the deployment of AI models using cloud services like AWS, Google Cloud, and Azure. 
                ConductorOS facilitates seamless orchestration and scaling of AI/ML models across these platforms. 
                It ensures that AI operations are adaptable and efficient, allowing for rapid deployment and integration 
                of diverse AI systems and data sources.</p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="circle circle-3"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Operations Center and Data Management</h2>
            <p>This area represents the central operations hub where data is monitored and managed. ConductorOS 
                streamlines data orchestration, ensuring that data from various sources is integrated and accessible. 
                This enables operators to make informed decisions quickly, optimizing performance and reducing inefficiencies 
                in complex environments.</p>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="circle circle-4"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Edge Computing with NVIDIA and Arm</h2>
            <p>This section illustrates the use of NVIDIA and Arm technologies for edge computing. ConductorOS supports 
                distributed computing, allowing AI inference to occur where data is collected. This edge-first approach 
                minimizes latency and power consumption, enabling rapid, real-time decision-making in dynamic and 
                resource-constrained environments.</p>
          </div>
        </div>

        {/* Circle 5 */}
        <div className="circle circle-5"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Centralized Orchestration Hub</h2>
            <p>This section represents the core functionality of ConductorOS, which connects and coordinates all nodes 
                in the system. It acts as a centralized hub that facilitates seamless communication and data flow between 
                different systems and sensor integrations, cloud computing platforms, operations centers, and edge 
                computing devices. By enabling interoperability and real-time data processing, this hub ensures efficient 
                and effective AI deployment across diverse environments, enhancing decision-making 
                and operational efficiency.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default diagram;
