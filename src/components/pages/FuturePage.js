import React, { useEffect } from "react";
import future from "../img/future.jpg";
import flowers from "../img/flowers.png";
import "./FuturePage.css"

export default function Future() {

    return (
        <div>
            <div id="future" className="main">
            <h1 className="title">Our Potential Future</h1>
                <div className="col1">
                    <div className="left">
                        <img className="flowersPic" src={flowers} alt="flowers" />
                    </div>
                    <div className="right">
                        <p className="text">
                        “Ultimately, building better cities and improving people’s lives requires 
                        challenging the very structures of capitalism itself, structures that are designed
                         to serve profit before people. We can build transportation systems that empower
                          people, facilitate social connections, and reduce the environmental footprint of
                           mobility. But that requires altering social and economic relations to ensure 
                           the planning of those systems is based in community needs, not delivering financial returns.
                        That is a future I would like to see” (Marx, 2022, page 183).
                        </p>
                    </div>
                </div>
                <div className="col1">
                    <div className="right">
                        <p className="text">
                        In the quote above, the author digs deep and provides a thought-provoking 
                        analysis as to what change needs to be made, such that we as a society don’t 
                        continue on this downward trajectory we are going. This suggests a critical 
                        perspective on the current economic system, asserting that the existing structures 
                        prioritize profit over people's well-being. 

                        Thus, Marx advocates for a transformation in urban development and transportation systems, 
                        arguing that true improvement in people's lives necessitates challenging fundamental aspects 
                        of capitalism.
                        </p>
                    </div>
                    <div className="left">
                        <img className="futurePic" src={future} alt="city" />
                    </div>
                </div>
            </div>
        </div>
    );
}