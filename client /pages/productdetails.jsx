import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
    const [product, setProduct] = useState(null);

      useEffect(() => {
          axios.get(`http://localhost:5000/api/products/${id}`)
                .then(res => setProduct(res.data))
                      .catch(err => console.error('Error loading product', err));
                        }, [id]);

                          if (!product) return <p className="text-center mt-5">Loading...</p>;

                            return (
                                <>
                                      <Navbar />
                                            <Container className="my-5">
                                                    <Row>
                                                              <Col md={6}>
                                                                          <img
                                                                                        src={product.img || ''}
                                                                                                      alt={product.name}
                                                                                                                    className="img-fluid"
                                                                                                                                />
                                                                                                                                          </Col>
                                                                                                                                                    <Col md={6}>
                                                                                                                                                                <h2>{product.name}</h2>
                                                                                                                                                                            <p className="text-muted">${product.price}</p>
                                                                                                                                                                                        <p>{product.description}</p>
                                                                                                                                                                                                    <Button variant="dark">Add to Cart</Button>
                                                                                                                                                                                                              </Col>
                                                                                                                                                                                                                      </Row>
                                                                                                                                                                                                                            </Container>
                                                                                                                                                                                                                                  <Footer />
                                                                                                                                                                                                                                      </>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                        export default ProductDetail;