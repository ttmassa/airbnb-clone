import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {

  const cards = data.map(element => {
    return (
      <Card 
        key={element.id}
        {...element}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}