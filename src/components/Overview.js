import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview-container">
            {/* Section 1 */}
            <section className="section section-1">
                <h2>Section 1: Introduction</h2>
                <p>This is the introduction section that spans the entire page height.</p>
            </section>

            {/* Section 2 */}
            <section className="section section-2">
                <h2>Section 2: Features</h2>
                <p>This section describes the features and takes up the full page as well.</p>
            </section>

            {/* Section 3 */}
            <section className="section section-3">
                <h2>Section 3: Conclusion</h2>
                <p>This is the conclusion section that also spans the entire page height.</p>
            </section>
        </div>
    );
}

export default Overview;
