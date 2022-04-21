import React from "react";
import ReactDOM from "react-dom";
import Task from "./components/Task";

const App = () => {
    return (
        <>
            <Task />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));