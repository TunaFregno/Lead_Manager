import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))