import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/AppLayout'
import Home from './Home'
import StationList from './StationList';

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stationList" element={<StationList />} />
      </Routes>
    </AppLayout>
  );
}



export default App;