import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
              .then(res => setProducts(res.data))
                    .catch(err => console.error('Error loading products', err));
                      }, []);

                        return (
                            <>
                                  <Navbar />
                                        <Container className="my-5">
                                                <h3 className="mb-4">All Products</h3>
                                                        <Row>
                                                                  {products.map((item, idx) => (
                                                                              <Col md={4} className="mb-4" key={idx}>
                                                                                            <ProductCard
                                                                                                            id={item._id}
                                                                                                                            name={item.name}
                                                                                                                                            price={item.price}
                                                                                                                                                            img={item.img}
                                                                                                                                                                          />
                                                                                                                                                                                      </Col>
                                                                                                                                                                                                ))}
                                                                                                                                                                                                        </Row>
                                                                                                                                                                                                              </Container>
                                                                                                                                                                                                                    <Footer />
                                                                                                                                                                                                                        </>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                          export default Products;