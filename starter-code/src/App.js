import React, { Component } from "react";
import "./App.css";

const iconOne = "/images/icon1.png";
const iconTwo = "/images/icon2.png";
const iconThree = "/images/icon3.png";
const iconFour = "/images/icon4.png";
const ironLogo = "/images/ironhack-logo.svg";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="main-header">
                    <div className="header-text-box">
                        <h1>Say Hello to React!</h1>

                        <p>
                            You will learn a Frontend framework from scratch and become a Ninja
                            developer!
                        </p>

                        <div className="button">Awesome!</div>
                    </div>
                </div>

                <div className="image-container">
                    <div className="image-card">
                        <img src={iconOne} />
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>

                    <div className="image-card">
                        <img src={iconTwo} />
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state</p>
                    </div>

                    <div className="image-card">
                        <img src={iconThree} />
                        <h3>Single Way</h3>
                        <p>A stet of immutable values are passed to the component's</p>
                    </div>

                    <div className="image-card">
                        <img src={iconFour} />
                        <h3>JSX</h3>
                        <p>Statically typed. designed to run on modern browsers</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
