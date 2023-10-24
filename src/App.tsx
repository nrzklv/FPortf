import React from 'react';
import './App.css';
import Header from "./layout/header/Header";
import Main from "./layout/sections/main/Main";
import Skills from "./layout/sections/skills/skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
