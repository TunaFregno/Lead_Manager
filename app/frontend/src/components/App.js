import React from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Dashboard />
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))