import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import LightRays from '../LightRays/LightRays';

const MainLayout = () => {

    return (
       <div className="relative lg:py-5 sm:py-3 max-w-6xl mx-auto  lg:p-5 sm:p-3   min-h-screen">
  {/* Background component */}
  <div className="absolute bg-gray-800  inset-0 z-0">
                <LightRays
     raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
                
                />
  </div>

  {/* Main content */}
  <div className="relative space-y-5 ">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
</div>

    );
};

export default MainLayout;