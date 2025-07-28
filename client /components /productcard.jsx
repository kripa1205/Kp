import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, price, img }) {
  return (
      <Card className="h-100">
            <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Img variant="top" src={img || ''} alt={name} />
                            <Card.Body>
                                      <Card.Title>{name}</Card.Title>
                                                <Card.Text>${price}</Card.Text>
                                                        </Card.Body>
                                                              </Link>
                                                                  </Card>
                                                                    );
                                                                    }

                                                                    export default ProductCard;