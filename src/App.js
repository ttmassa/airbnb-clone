import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {

  const cards = data.map(element => {
    return (
      <Card 
        img={element.coverImg}
        rating={element.stats.rating}
        reviewCount={element.stats.reviewCount}
        location={element.location}
        title={element.title}
        price={element.price}
        availability={element.availability}
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