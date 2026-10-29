import React from 'react';
import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <div className="card" style={{width: 590, margin: '30px auto 0'}}>
            <div className="card-body">
                <h3 className="card-title" style={{textAlign: "left"}}>About</h3>
                <p className="card-text" style={{textAlign: "left"}}>
                    The Aurora CS Course Scheduler shows the CS Developer Track catalog,
                    tracks which courses you have completed, and shows which courses you are
                    elgible to take next.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", rowGap: "8px" }}>
                    <strong>Author(s) </strong>
                    <span>Denisse Garcia & Alondra Mendoza</span>

                    <strong>Date </strong>
                    <span>Sunday, October 11, 2026</span>

                    <strong>Version </strong>
                    <span>1.0.0 </span>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
