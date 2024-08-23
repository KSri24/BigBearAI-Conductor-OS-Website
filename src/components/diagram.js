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
    <div className="diagram">
      <Section className="diagram_section-1">

        <h2 className="dHeading">Interactive Diagram</h2>
        <img className="diagramImage" src={image} width="900" height="730" alt="Diagram" />

        <div className="circle"></div>
            <div className="overlay">
                <div className="overlay-text">
                    <h2>Hover Text</h2>
                    <p>This is some dummy text that appears when you hover over the circle. You can add more text here.</p>
                </div>
        </div>

      </Section>


    </div>
  );
};

export default diagram;
