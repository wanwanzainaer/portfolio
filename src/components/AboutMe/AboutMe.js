import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container">
      <div className="resume">
        <h1>Summary</h1>
        <div />
        <p>
          I am a FullStack developer and iOS developer. I'm
          extraordinarily motivated by the desire to achieve higher
          level of coding skills by challenging myself everyday.
          According to fullstack development, I use HTML, CSS,
          JavaScript and React to build interactive web pages, using
          Node and MongoDB to build server side In addition, my
          deploying processes are powered by Docker. For iOS
          developement, I have more than two years industrial
          experiences using Object-C, Swift.
        </p>
        <h1>Education</h1>
        <div />
        <h4>California Lutheran University, Thousand Oaks, CA</h4>
        <ul style={{}}>
          <h5>May 2017 - Aug 2019</h5>
          <li style={{ fontSize: "25px" }}>
            Master of Science in Information Technology
          </li>
        </ul>
        <br />
        <h1>Work Experience</h1>
        <div />
        <ul>
          <h6>Programming Language</h6>
          <li>
            Proficient in Python, JavaScript and Familiar with Java,
            Swift, Object-C and Ruby
          </li>
          <h6>Skill Set</h6>
          <li>
            React, NodeJS, iOS, Xcode, AWS, GCP, Git, Django, MongoDB,
            MS SQL, RESTful API, Scrapy, CocoaPod, Docker, k8s
          </li>
          <h6>Knowledge</h6>
          <li>
            Web Development, Relational Database Design, NoSQL, mobile
            Development
          </li>
        </ul>
        <h1>Work Experience</h1>
        <div />
        <h4>Tap Series</h4>
        <h5>Dec. 2018 - Feb. 2019</h5>
        <h6>Software Engineer Intern</h6>
        <ul>
          <li>Web crawler uses Python 3 and Beautiful Soup 4 </li>
          <li>
            Utilized Python 3 automatic generated label and picture{" "}
          </li>
          <li>
            Built mobile-friendly website using JavaScript, jQuery,
            Bootstrap, CSS, and HTML
          </li>
        </ul>
        <br />
        <div />
        <h4>Freelance (Sesh Electronics Crop.)</h4>
        <h5>Dec. 2015 - Jun. 2016</h5>
        <h6>iOS Developer</h6>
        <ul>
          <li>
            Utilized iOS BLE connect car BLE sensor then control and
            get the information from the sensor. (Obj-C)
          </li>
          <li>
            Utilized Google map to navigation (GPS from sensor) and
            record driving path by Realm, list of the all driving path
            records. (Swift)
          </li>
          <li>
            Using phone control car sensor do all the functional
            action, for example lock and unlock car. (Obj-C)
          </li>
        </ul>
        <br />
        <div />
        <h4>Freelance (Sunming-Eye Clinic)</h4>
        <h5>Jan. 2015 - Nov. 2015</h5>
        <h6>iOS Developer</h6>
        <ul>
          <li>
            Utilized CoreData store patient’s physiology information
            and medicine order which can send notification in time of
            taking medicine
          </li>
          <li>
            Utilized CoreData to save Electronic Health Records(EHR)
          </li>
          <li>
            Patient can download medicine information details and make
            an appointment with Parse(likely firebase) (Obj-C):
          </li>
          <li>
            Clinic stuff can CRUD medicine information and receive the
            appointment from patien(iPad)
          </li>
          <li>
            Doctor finished the medicine order (information and
            QRCode) then print out by Thermal Printer(iPad)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
