import React from 'react';
import { Carousel } from 'react-bootstrap';

function AdCarousel() {
  return (
      <Carousel className="my-4">
            <Carousel.Item>
                    {/* <img src="" alt="Ad 1" className="d-block w-100" /> */}
                            <div className="d-block w-100 bg-secondary text-white text-center py-5">
                                      <h2>Boot Season is Here – 30% Off</h2>
                                              </div>
                                                    </Carousel.Item>
                                                          <Carousel.Item>
                                                                  {/* <img src="" alt="Ad 2" className="d-block w-100" /> */}
                                                                          <div className="d-block w-100 bg-dark text-white text-center py-5">
                                                                                    <h2>Heels That Turn Heads</h2>
                                                                                            </div>
                                                                                                  </Carousel.Item>
                                                                                                        <Carousel.Item>
                                                                                                                {/* <img src="" alt="Ad 3" className="d-block w-100" /> */}
                                                                                                                        <div className="d-block w-100 bg-light text-dark text-center py-5">
                                                                                                                                  <h2>New Sandals Collection Just Landed</h2>
                                                                                                                                          </div>
                                                                                                                                                </Carousel.Item>
                                                                                                                                                    </Carousel>
                                                                                                                                                      );
                                                                                                                                                      }

                                                                                                                                                      export default AdCarousel;