import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Fight from './pages/Fight';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stats from './pages/Stats';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {
    return(
        <Router>
            <Header />
            <div>
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                    <Route 
                        path="/login"
                        element={<Login />}
                    />
                    <Route 
                        path="/signup"
                        element={<Signup />}
                    />
                    <Route 
                        path="/fight"
                        element={<Fight />}
                    />
                    <Route 
                        path="/stats"
                        element={<Stats />}
                    />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;