import React from 'react';
import './styles/Resume.css';
import ResumePh from '../components/styles/img/Maryam-Selassie-Resume.jpg';

function Resume() {
    return (
        <div>
        <img class="resumePhoto" src={ResumePh} alt="me"></img>
        <a href = {ResumePh}
        Download = "Maryam-Selassie-Resume.jpg">
           <button type = "button"> Download </button>
        </a>
        </div>
    )}

    export default Resume;