import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Button, Card } from 'react-bootstrap';

function Dashboard() {
  // Static example orders — connect to API later
    const orders = [
        { id: 'ORD123', item: 'Blush Heel', total: '$89', status: 'Delivered' },
            { id: 'ORD124', item: 'Winter Boot', total: '$120', status: 'Shipped' },
              ];

                const handleLogout = () => {
                    alert('Logged out successfully!');
                      };

                        return (
                            <>
                                  <Navbar />
                                        <Container className="my-5">
                                                <h3 className="mb-4">My Dashboard</h3>

                                                        <Card className="mb-4 p-3 shadow-sm">
                                                                  <h5>My Orders</h5>
                                                                            {orders.map((order, index) => (
                                                                                        <div key={index} className="border-bottom py-2">
                                                                                                      <strong>{order.item}</strong> — {order.total} — {order.status}
                                                                                                                  </div>
                                                                                                                            ))}
                                                                                                                                    </Card>

                                                                                                                                            <Card className="mb-4 p-3 shadow-sm">
                                                                                                                                                      <h5>Leave Feedback</h5>
                                                                                                                                                                <textarea
                                                                                                                                                                            className="form-control"
                                                                                                                                                                                        rows={3}
                                                                                                                                                                                                    placeholder="Write your feedback..."
                                                                                                                                                                                                              />
                                                                                                                                                                                                                        <Button variant="dark" className="mt-2">Submit</Button>
                                                                                                                                                                                                                                </Card>

                                                                                                                                                                                                                                        <div className="text-end">
                                                                                                                                                                                                                                                  <Button variant="secondary" onClick={handleLogout}>
                                                                                                                                                                                                                                                              Logout
                                                                                                                                                                                                                                                                        </Button>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                      </Container>
                                                                                                                                                                                                                                                                                            <Footer />
                                                                                                                                                                                                                                                                                                </>
                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                  export default Dashboard;