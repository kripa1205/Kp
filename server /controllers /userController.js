import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import config from '../utils/config.js';

// POST /api/users
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
      if (exists) {
          return res.status(400).json({ message: 'User already exists' });
            }

              const user = await User.create({ name, email, password });

                const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '7d' });

                  res.status(201).json({
                      _id: user._id,
                          name: user.name,
                              email: user.email,
                                  token,
                                    });
                                    };

                                    // POST /api/users/login
                                    const loginUser = async (req, res) => {
                                      const { email, password } = req.body;
                                        const user = await User.findOne({ email });

                                          if (user && (await user.matchPassword(password))) {
                                              const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '7d' });

                                                  res.json({
                                                        _id: user._id,
                                                              name: user.name,
                                                                    email: user.email,
                                                                          token,
                                                                              });
                                                                                } else {
                                                                                    res.status(401).json({ message: 'Invalid email or password' });
                                                                                      }
                                                                                      };

                                                                                      // GET /api/users/profile
                                                                                      const getUserProfile = async (req, res) => {
                                                                                        const user = await User.findById(req.user.id).select('-password');
                                                                                          if (user) {
                                                                                              res.json(user);
                                                                                                } else {
                                                                                                    res.status(404).json({ message: 'User not found' });
                                                                                                      }
                                                                                                      };

                                                                                                      export { registerUser, loginUser, getUserProfile };