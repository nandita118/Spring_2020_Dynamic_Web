import React from "react";

function Header(){
    return(
        <header className="Header">
            <h2>COVID-TRANSIT DATA</h2>
            <div className="BoroughsNav">
                <a href="/?borough=Bronx">Bronx</a>
                <a href="/?borough=Manhattan">Manhattan</a>
                <a href="/?borough=Brooklyn">Brooklyn</a>
                <a href="/?borough=Queens">Queens</a>
            </div>

        </header>
    );
}

export default Header;