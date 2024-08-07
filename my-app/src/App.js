import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const descriptions = {
    aiOrchestration: `
        <h3>AI Orchestration</h3>
        <p>AI Orchestration refers to the coordinated management and integration of various AI systems and processes to achieve efficient, effective, and optimized outcomes.</p>
        <ul>
            <li><strong>Integration of Multiple AI Models and Systems:</strong> Combines different AI models, ensuring seamless data flow between systems.</li>
            <li><strong>Resource Allocation and Management:</strong> Efficiently manages computational resources like CPU, GPU, and memory.</li>
            <li><strong>Scaling and Adaptability:</strong> Scales AI operations efficiently, adapting to changing conditions without manual intervention.</li>
            <li><strong>Monitoring and Maintenance:</strong> Continuously monitors AI systems for performance and proactively maintains them.</li>
        </ul>
    `,
    dataOrchestration: `
        <h3>Data Orchestration</h3>
        <p>Data orchestration involves integrating and managing data from multiple sources to ensure it is accessible, usable, and efficiently processed.</p>
        <ul>
            <li><strong>Data Integration:</strong> Combines data from disparate sources to create a unified view.</li>
            <li><strong>Scalability and Flexibility:</strong> Accommodates varying data volumes and changing requirements.</li>
            <li><strong>Monitoring and Optimization:</strong> Continuously monitors data processes to optimize flow and performance.</li>
        </ul>
    `,
    sensorFusion: `
        <h3>Sensor Fusion</h3>
        <p>Sensor fusion combines data from multiple sensory sources to provide a comprehensive, accurate, and dependable view.</p>
        <ul>
            <li><strong>Data Combination:</strong> Combines various data streams for accurate perception.</li>
            <li><strong>Error Reduction:</strong> Reduces errors by integrating data from multiple sources.</li>
            <li><strong>Improved Accuracy and Robustness:</strong> Provides a more accurate representation of the environment.</li>
            <li><strong>Contextual Awareness:</strong> Enhances situational awareness for the operator.</li>
        </ul>
    `
};

function App() {
    const [description, setDescription] = useState('');

    const showDescription = (part) => {
        setDescription(descriptions[part]);
    };
    <Navbar />
    return (
        
        <div className="App">
            <div className="diagram">
                <div className="part" onClick={() => showDescription('aiOrchestration')}>AI Orchestration</div>
                <div className="part" onClick={() => showDescription('dataOrchestration')}>Data Orchestration</div>
                <div className="part" onClick={() => showDescription('sensorFusion')}>Sensor Fusion</div>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    );
}

export default App;