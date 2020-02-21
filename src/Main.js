import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Prosta aplikacja jednostronowa</h1>
                <ul className="header">
                    <li><a href="/">Strona glowna</a></li>
                    <li><a href="/stuff">O nas</a></li>
                    <li><a href="/contact">Kontakt</a></li>
                </ul>
            </div>
        );
    }
}

export default Main;