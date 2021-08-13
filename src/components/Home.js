import React from 'react';
import "./Home.css";
import blood_image from "../Images/Blooddropmin.png";
import home from "../videos/home.mp4";
function Home() {
    return (
        <div className="home">
        <video autoPlay loop muted className="home_video" >
            <source src={home} />
        </video>
            <div className="home_container">
                <div className="hc_left">
                    <h1>Blood Bank System</h1>
                    <p>Online Blood Bank System that helps in managing various
                     blood bank operations effectively. This helps for immediate
                      access to the list of hospitals of different blood samples 
                      that can be chosen by the donors. These details include 
                      blood type and date of storage. This is an online system
                       that allows checking whether required blood deposits of
                        a particular group are available in the blood bank. 
                        Moreover, the system also added features such as patient 
                        names and contacts, blood booking. Helps people find blood donors 
                    in times of need. On average, a person has to take 3 months
                     of time gap for the next donation.</p>
                </div>
                <div className="hc_right">
                    <img src={blood_image} alt="blood image" />
                </div>
            </div>
        </div>
    )
}

export default Home;
