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
                <p className="textBottom">
                    Overall, we can see how cars have negatively impacted and completely uprooted the
                    lives of the people living in the cities, who didn’t mind walking or biking from place
                    to place. As a result, mass murder of innocent pedestrians occurred. One prime example of
                    this can be seen through Robert Moses’s construction of the Cross Bronx Expressway. Those living
                    in the buildings that the expressway tore through were forced out of their homes with no regard as 
                    to what their opinions were. What’s even more concerning is how there is still an incredible amount of death surrounding vehicles, from car accidents to deliberate hit-and-runs. The automobile industry is directly responsible for how urban planning and infrastructure have been shaped, and we can now see that walking from place to place is exponentially more difficult with how our cities are currently laid out. In the end, we can see that current urban and transportation systems are designed with a primary focus on generating financial returns rather than addressing community needs.
                </p>
                <p className="citation">
                [Photograph of a field of flowers]. (n.d). https://www.pinterest.com/pin/6614730677300937/
                </p>
                <p className="citation">
                Frasers Property Australia. (2018). Walkable communities mean you can leave the car at home and avoid peak-hour traffic [Photograph]. realestate.com.au. https://www.realestate.com.au/advice/walkable-communities-way-of-the-future/
                </p>
            </div>
        </div>
    );
}