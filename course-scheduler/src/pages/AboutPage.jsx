import React from 'react';
import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <div className="card" style={{width: 500, margin: 'auto'}}>
            <div className="card-body">
                <h4 className="card-title" style={{textAlign: "left"}}>About</h4>
                <p className="card-text" style={{textAlign: "left"}}>
                    The Aurora CS Course Scheduler shows the CS Developer Track catalog,
                    tracks which courses you have completed, and shows which courses you are
                    elgible to take next.
                </p>


            </div>
        </div>
    );
}

export default AboutPage;
