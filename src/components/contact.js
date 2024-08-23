import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import image from '../media/IMG_4775.png';

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

const Contact = () => {
  return (
    <div id="contact-us">
      <Section className="contact_section">
        <div>
          <h2 className="c">Contact Us</h2>
          <p className="ctext">
            Joshua Cancio and I, Sriram Koduru, worked as DoD OUSD Technology Readiness Assessors for multiple technologies, including BigBear AI's Conductor OS, during the T-REX 24-2 event this past summer.
            During the assessment and documentation process, we noticed that there was a gap in knowledge regarding software applications and how to assess them. So Josh and I decided that we could use
            our Computer Science background to serve as Software SMEs to help the other assessors formulate an assessment plan. We were able to help form relevant and targeted measures of performance 
            and effectiveness for assessments. Lastly, we decided to create a website with an interactive diagram as well to help better bridge the gap in knowledge for Conductor OS capabilities.
          </p>
        </div>
        <figure>
          <img className="image" src={image} width="550" height="730" alt="Conductor OS Diagram" />
          <div className="caption">
          <figcaption>Joshua Cancio (left)</figcaption>
          <figcaption>Sriram Koduru (right)</figcaption>
          </div>
        </figure>
      </Section>
    </div>
  );
};

export default Contact;
