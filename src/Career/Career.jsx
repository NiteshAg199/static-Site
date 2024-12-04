import React from "react";
import './Career.css';
const Career=()=>{
    return(
        <>
            <div className="careerPageContainer">
                <div className="careerPageHeading">Careers</div>
                <div className="careerOpenings">Part Time /Full Time IT Trainer- (Chennai/Bangalore/Hyderabad)- 15 Openings</div>
                <div className="careerOpeningRequirement">(Mobile Automation-Android & IOS, Selenium & Playwright, Performance & API Testing, Tosca automation, Cyber Security, DevOps, Data Science, Artificial Intelligence, Big Data, Digital Marketing, Internet of Things )</div>
                <div className="jobDescriptionBlock">
                    <div className="jobDescriptionHeading"><u>Job description</u></div>
                    <div className="jobDescriptionDetails">
                        <li>Train and mentor training participants through hands-on sessions, problem solving, case studies, assignments</li>
                        <li>Analyse Training Needs, Develop Courseware including Case Studies and Conduct Technical Training Programs(Weekend / weekday sessions)</li>
                        <li>Bring real project use case scenarios for developing hands-on expertise for training participants</li>
                        <li>Evaluate participant’s progress using quiz, assessments and Provide Training materials.</li>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Career;