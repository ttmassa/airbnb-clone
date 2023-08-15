import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import swimmerImage from './images/katie-zafares.png'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img={swimmerImage} 
        rating="5.0"
        reviewCount="6"
        country="France"
        title="Life Lessons with Katie Zafares"
        price="136"
      />
    </div>
  );
}