import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePageModul1 from './Pelatihan/HomePageModul/HomePageModul1';
import HomePageModul2 from './Pelatihan/HomePageModul/HomePageModul2';
import HomePageSubModul1 from './Pelatihan/HomePageSubModul/HomePageSubModul1';
import HomePageSubModul2 from './Pelatihan/HomePageSubModul/HomePageSubModul2';
import HomePageSubModul3 from './Pelatihan/HomePageSubModul/HomePageSubModul3';
import HomePageSubModul4 from './Pelatihan/HomePageSubModul/HomePageSubModul4';
import HomePageSubModul5 from './Pelatihan/HomePageSubModul/HomePageSubModul5';
import HomePageSubModul6 from './Pelatihan/HomePageSubModul/HomePageSubModul6';
import HomePageSubModul7 from './Pelatihan/HomePageSubModul/HomePageSubModul7';
import HomePageSubModul8 from './Pelatihan/HomePageSubModul/HomePageSubModul8';
import HomePageFinalQuis from './Pelatihan/HomePageFinalQuis/HomePageFinalQuis';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/homepagemodul1' element={<HomePageModul1/>} />
        <Route path='/homepagemodul2' element={<HomePageModul2/>} />
        <Route path='/homepagesubmodul1' element={<HomePageSubModul1/>} />
        <Route path='/homepagesubmodul2' element={<HomePageSubModul2/>} />
        <Route path='/homepagesubmodul3' element={<HomePageSubModul3/>} />
        <Route path='/homepagesubmodul4' element={<HomePageSubModul4/>} />
        <Route path='/homepagesubmodul5' element={<HomePageSubModul5/>} />
        <Route path='/homepagesubmodul6' element={<HomePageSubModul6/>} />
        <Route path='/homepagesubmodul7' element={<HomePageSubModul7/>} />
        <Route path='/homepagesubmodul8' element={<HomePageSubModul8/>} />
        <Route path='/homepagefinalquis' element={<HomePageFinalQuis/>} />
      </Routes>
    </Router>

  );
}

export default App;
