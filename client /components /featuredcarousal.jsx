import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

function FeaturedCarousel() {
  const [featured, setFeatured] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/featured')
              .then(res => setFeatured(res.data))
                    .catch(err => console.error('Failed to load featured products', err));
                      }, []);

                        return (
                            <Container className="my-5">
                                  <h3 className="mb-4">Featured Picks</h3>
                                        <Row>
                                                {featured.map((item, idx) => (
                                                          <Col md={4} key={idx} className="mb-4">
                                                                      <Card className="h-100">
                                                                                    <Card.Img variant="top" src={item.img || ''} alt={item.name} />
                                                                                                  <Card.Body>
                                                                                                                  <Card.Title>{item.name}</Card.Title>
                                                                                                                                  <Card.Text>${item.price}</Card.Text>
                                                                                                                                                </Card.Body>
                                                                                                                                                            </Card>
                                                                                                                                                                      </Col>
                                                                                                                                                                              ))}
                                                                                                                                                                                    </Row>
                                                                                                                                                                                        </Container>
                                                                                                                                                                                          );
                                                                                                                                                                                          }

                                                                                                                                                                                          export default FeaturedCarousel;