import React, { useState } from 'react';
import './auth/AuthLogin.css'; // Import the CSS file for styling
import logo from 'src/assets/images/logos/AA.png';
import facebookLogo from 'src/assets/images/logos/facebook.png'; // Import Facebook logo
import githubLogo from 'src/assets/images/logos/github.png'; // Import GitHub logo
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material'; // Import MUI components

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container maxWidth="xs" sx={{ marginBlock: '130px' }}> {/* Add margin-block */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8,
                    p: 3, // Reduce padding
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    border: '1px solid #e0e0e0', // Add border for professional view
                }}
            >
                <img src={logo} alt="Logo" className="login-logo" style={{ marginBottom: '20px', width: '80px' }} /> {/* Reduce logo size */}
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}> {/* Reduce margin top */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, mb: 2 }} // Reduce margin top and bottom
                    >
                        Login
                    </Button>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}> {/* Reduce margin top */}
                        <Grid item>
                            <Button
                                variant="outlined"
                                startIcon={<img src={facebookLogo} alt="Facebook" style={{ width: '20px' }} />}
                                sx={{ textTransform: 'none' }}
                            >
                            
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                startIcon={<img src={githubLogo} alt="GitHub" style={{ width: '20px' }} />}
                                sx={{ textTransform: 'none' }}
                            >
                              
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" sx={{ mt: 1 }}> {/* Reduce margin top */}
                        <Grid item>
                            <Typography variant="body2">
                                Do you want to register? <Link to="/auth/register">Create an account</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
