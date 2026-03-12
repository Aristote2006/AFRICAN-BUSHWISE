import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Destinations from '../pages/Destinations/Destinations';
import Tours from '../pages/Tours/Tours';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/destinations" element={<MainLayout><Destinations /></MainLayout>} />
      <Route path="/tours" element={<MainLayout><Tours /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;
