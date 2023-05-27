import React from 'react';
import './styles/Works.css';
import Image from '../components/styles/img/Pinkgirl.PNG';
import Image2 from '../components/styles/img/fashion.html.jpg';
import Image3 from '../components/styles/img/Project-2-Nutruplanner.jpg';

function Works() {
    return (
        <div class="flex">
            <a  href ="https://brian-lascuna.github.io/fashion-forecast/"><img src={Image2} id="content" alt=""></img></a>
            <a  href ="https://nutriplanner-app.herokuapp.com/"><img src={Image3} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            <a  href ="#"><img src={Image} id="content" alt=""></img></a>
            
        </div>
    )}

    export default Works;