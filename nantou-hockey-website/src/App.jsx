import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import EventInfo from './components/EventInfo';
import Tourism from './components/Tourism';
import Registration from './components/Registration';
import Tickets from './components/Tickets';
import ChatBot from './components/ChatBot';
import TechDatabase from './components/TechDatabase';
import Metaverse from './components/Metaverse';
import Event2026 from './components/Event2026';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event-info" element={<EventInfo />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/tech-database" element={<TechDatabase />} />
            <Route path="/metaverse" element={<Metaverse />} />
            <Route path="/event-2026" element={<Event2026 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
