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
            <h2>Hover Text 1</h2>
            <p>This is some dummy text that appears when you hover over circle 1. You can add more text here.</p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="circle circle-2"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Hover Text 2</h2>
            <p>This is some dummy text that appears when you hover over circle 2. You can add more text here.</p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="circle circle-3"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Hover Text 3</h2>
            <p>This is some dummy text that appears when you hover over circle 3. You can add more text here.</p>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="circle circle-4"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Hover Text 4</h2>
            <p>This is some dummy text that appears when you hover over circle 4. You can add more text here.</p>
          </div>
        </div>

        {/* Circle 5 */}
        <div className="circle circle-5"></div>
        <div className="overlay">
          <div className="overlay-text">
            <h2>Hover Text 5</h2>
            <p>This is some dummy text that appears when you hover over circle 5. You can add more text here.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default diagram;
