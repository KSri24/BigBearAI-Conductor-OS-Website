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
        <h2 className='N'>Interactive Diagram</h2>

        <img className="diagramImage" src={image} width="950" height="800" />

        {/* <p className='dtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
      </Section>

    </div>
  );
};

export default diagram;