import React, { useEffect } from "react";
import netherlands from "../img/netherlands.png";
import car from "../img/car.jpg";
import "./HistoryPage.css"

export default function History() {

    return (
        <div>
            <div id="history" className="main">
                <h1 className="title">A Brief History</h1>
                <div className="col1">
                    <div className="left">
                        <img className="netherlandsPic" src={netherlands} alt="netherlands" />
                    </div>
                    <div className="right">
                        <p className="text">
                            Before the automobile industry disrupted our lives, people got around from 
                            place to place through simpler means. Walking, biking, and travelling by horse 
                            carriage were incredibly common. Not only did these means of transportation result 
                            in 0 carbon emissions, they were also safe, and did not impose any class disparity 
                            amongst the general populace. Anyone could walk anywhere, and the urban planning of 
                            cities was built around that fact. 
                        </p>
                        <p className="text">
                        - This image illustrates a group of protestors blockading a dangerous
                            intersection. They used baby carriages as blockades, portraying a powerful
                            message.
                        </p>
                    </div>
                </div>
                <div className="col1">
                    <div className="right">
                        <p className="text">
                            After vehicles were beginning to take shape and structure, businesses from back in the day 
                            began to take notice. They saw incredible profit potential from this new invention, and sought 
                            to capitalize it in any way possible. However, one problem presented itself: how would people 
                            turn towards automobiles as a means of transit, when walking was even more feasible? Towns and 
                            cities were built around using slower means of transportation to get around. So what did they do? 
                            They carefully constructed the market for cars to become not only an alternative method of transit, 
                            but also the only means.
                        </p>
                    </div>
                    <div className="left">
                        <img className="carPic" src={car} alt="car" />
                    </div>
                </div>
            </div>
        </div>
    );
}