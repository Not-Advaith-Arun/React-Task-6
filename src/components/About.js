import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function About() {
    return (
        <div id="about-section" className="container text-start px-5 text-center" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center text-start">
                    <div >
                        <TypeAnimation
                            sequence={['Hello!\n I am Advaith Arun.', 1000, "",]}
                            speed={50}
                            style={{ whiteSpace: 'pre-line', fontSize: '3em', fontWeight: 'bolder' }}
                            repeat={Infinity}
                        /><br /><br /><br />
                        <p>I'm a third year Computer Science and Engineering undergraduate, passionate about web development.</p>
                        <p>My goal as a web developer is to create user-friendly websites and elegant web applications. I'm committed to learning and staying updated with new technologies to craft digital solutions that make a positive impact.</p>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    );
}

export default About;