import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
return (
<Router>
<div className="app-container">
<Header />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/jobs" element={
<>
<PageHeader title="Get Your Job" />
<Jobs />
</>
} />
<Route path="/job/:id" element={<JobDetails />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}
export default App