import './App.css';
import SideBar from './sidebar';
import React from "react";

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import PrivateRoutes from './utils/PrivateRoutes';

import Home from './pages/home';
import About from './pages/about';
import Account from './pages/account';
import Discover from './pages/discover';
import Following from './pages/following';
import Login from './pages/login';
import Market from './pages/market';
import Creatorpage from './pages/creatorpage';

export default function App() {

    //check for login... otherwise redirect to login page

    return (
        <div id="App">
            <Router>

                <Navbar />
                <SideBar />

                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route exact path='/' exact element={<Home />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/creatorpage' element={<Creatorpage />} />
                        <Route path='/discover' element={<Discover />} />
                        <Route path='/following' element={<Following />} />
                        <Route path='/market' element={<Market />} />
                    </Route>

                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}