import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import AdCarousel from '../components/AdCarousel';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Banner full width */}
      <HeroBanner />

      {/* Advertisement Carousel */}
      <Container fluid className="my-4">
        <AdCarousel />
      </Container>

      {/* Featured Products Carousel */}
      <Container fluid className="my-5">
        <FeaturedCarousel />
      </Container>

      <Footer />
    </>
  );
}

export default Home;
