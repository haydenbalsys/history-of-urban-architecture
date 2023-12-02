import React, { useEffect } from "react";
import "./HomePage.css"

export default function Home() {

    return (
        <div>
            <div id="home" className="main">
                <div className="section hidden">
                    <div className="col">
                        <h1 className="title">TITLE</h1>
                        <p className="text">
                            blurb goes here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}