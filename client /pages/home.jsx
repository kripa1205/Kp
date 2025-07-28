import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import AdCarousel from '../components/AdCarousel';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Footer from '../components/Footer';

function Home() {
  return (
      <>
            <Navbar />
                  <HeroBanner />
                        <AdCarousel />
                              <FeaturedCarousel />
                                    <Footer />
                                        </>
                                          );
                                          }

                                          export default Home;