import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Page from './components/Page';

function App() {
  const [currentTab, setCurrentTab] = useState("home")

 
  return (
   
    <>
    <Page/>
      <NavBar currentTab={currentTab} changeTab={(tabName)=>{ setCurrentTab(tabName); console.log(tabName)}} />
    </>
  );
}

export default App;
