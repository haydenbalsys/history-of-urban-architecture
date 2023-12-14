import React, { useEffect } from "react";
import graph from "../img/graph.png";
import copenhagen from "../img/copenhagen.jpg";
import "./SocialPage.css"

export default function Social() {

    return (
        <div>
            <div id="social" className="main">
            <h1 className="title">The Social Repercussions</h1>
                <div className="col1">
                    <div className="left">
                        <img className="graphPic" src={graph} alt="graph" />
                    </div>
                    <div className="right">
                        <p className="text">
                        Marx describes the modern day as such: “Owning a vehicle is not a choice, 
                        it is a necessity, and to suggest otherwise would be silly (Marx, 2022, 13). 
                        This quote emphasizes that having a personal vehicle is no longer a luxury, but a 
                        necessity as a means of travel. Those who believe otherwise have become out of touch 
                        with reality, and need to gain more perspective on how exactly the automobile industry 
                        pushed for urban infrastructure to be shaped in a way where you can’t get anywhere just 
                        by walking. The author seems to challenge the notion that vehicle ownership is discretionary, 
                        highlighting its importance in contemporary society, perhaps due to factors such as transportation 
                        infrastructure, work requirements, or other practical considerations.
                        </p>
                    </div>
                </div>
                <div className="col1">
                    <div className="right">
                        <p className="text">
                        Upon increasing backlash due to child deaths, modern infrastructure has been directly impacted 
                        by a decision the United States carelessly made— a decision with further supported the growth of 
                        the automobile industry over the well-being of the people. Marx comments on this, stating that 
                        “Instead of doubling down on suburbia and automobility, the United States could have taken another 
                        path—the path taken by parts of Europe.” (Marx, 2022, 162). Europe decided to hone their efforts on 
                        creating an environment more suited for walking. Of course, walking has its limitations in terms of
                         distance and travel. However, in light of this, they channeled funding towards public means of transportation. 
                         Today, Europe is now known for how great its public transportation system is.
                        </p>
                    </div>
                    <div className="left">
                        <img className="copenhagenPic" src={copenhagen} alt="city" />
                    </div>
                </div>
                <p className="citation">
                Bratland, D. (2018). US traffic deaths per VMT, VMT, per capita, and total annual deaths [Graph]. Wikipedia. https://en.wikipedia.org/wiki/Motor_vehicle_fatality_rate_in_U.S._by_year#/media/File:US_traffic_deaths_per_VMT,_VMT,_per_capita,_and_total_annual_deaths.png
                </p>
                <p className="citation">
                Jagerhaus, S. (2022). Copenhagen, Stroget [Photograph]. Arch Daily. https://www.archdaily.com/976607/whats-the-matter-with-american-cities
                </p>
            </div>
        </div>
    );
}