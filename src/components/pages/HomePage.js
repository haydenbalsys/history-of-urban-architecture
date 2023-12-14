import React, { useEffect } from "react";
// import barcelona image as icon from img folder
import barcelona from "../img/barcelona.jpg";
import "./HomePage.css"

export default function Home() {

    return (
        <div>
            <div id="home" className="main">
                <div className="col">
                    <h1 className="title">A Brief History of Urban Architecture</h1>
                    <p className="text">
                        A project by Hayden Balsys and Akila Suresh
                    </p>
                </div>
                <div className="col">
                    <img className="barcaPic" src={barcelona} alt="Barcelona" />
                </div>
                <div className="col">
                    <h3 className="title">This is a report on the book Road to Nowhere by Paris Marx</h3>
                    <p className="text1">
                        Focused on the research question: How has the technological innovation of
                        urban planning and road infrastructure been pushed in a way that negatively
                        affects the U.S population? How does the author feel that this can be navigated?
                    </p>
                </div>
                <p className="citation">
                    Shutterstock. (2017). Barcelona’s Eixample neighborhood, just waiting to be superblocked [Photograph]. Vox. https://www.vox.com/2016/8/4/12342806/barcelona-superblocks
                </p>
            </div>
        </div>
    );
}