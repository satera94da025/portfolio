import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./mainBlock/Main";
import Skills from "./skills/Skills";
import Jobs from "./jobs/Jobs";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Jobs/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
