import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                                    <Route path="/product/:id" element={<ProductDetail />} />
                                            <Route path="/cart" element={<Cart />} />
                                                    <Route path="/checkout" element={<Checkout />} />
                                                            <Route path="/login" element={<Login />} />
                                                                    <Route path="/signup" element={<Signup />} />
                                                                            <Route path="/dashboard" element={<Dashboard />} />
                                                                                  </Routes>
                                                                                      </BrowserRouter>
                                                                                        );
                                                                                        }

                                                                                        export default App;