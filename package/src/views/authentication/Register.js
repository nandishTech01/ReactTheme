// import React from 'react';
// import { Grid, Box, Card, Typography, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// import PageContainer from 'src/components/container/PageContainer';
// import Logo from 'src/layouts/full/shared/logo/Logo';
// import AuthRegister from './auth/AuthRegister';

// const Register2 = () => (
//   <PageContainer title="Register" description="this is Register page">
//     <Box
//       sx={{
//         position: 'relative',
//         '&:before': {
//           content: '""',
//           background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
//           backgroundSize: '400% 400%',
//           animation: 'gradient 15s ease infinite',
//           position: 'absolute',
//           height: '100%',
//           width: '100%',
//           opacity: '0.3',
//         },
//       }}
//     >
//       <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           lg={4}
//           xl={3}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
//             <Box display="flex" alignItems="center" justifyContent="center">
//               <Logo />
//             </Box>
//             <AuthRegister
//               subtext={
//                 <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
//                   Your Social Campaigns
//                 </Typography>
//               }
//               subtitle={
//                 <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
//                   <Typography color="textSecondary" variant="h6" fontWeight="400">
//                     Already have an Account?
//                   </Typography>
//                   <Typography 
//                     component={Link}
//                     to="/auth/login"
//                     fontWeight="500"
//                     sx={{
//                       textDecoration: 'none',
//                       color: 'primary.main',
//                     }}
//                   >
//                     Sign In
//                   </Typography>
//                 </Stack>
//               }
//             />
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   </PageContainer>
// );

// export default Register2;



// import React, { useState } from 'react';
// import './auth/AuthLogin.css'; 
// import logo from 'src/assets/images/logos/AA.png'; 


// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 <img src={logo} alt="Logo" className="login-logo" />
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="login-button">Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useState } from 'react';
import './auth/AuthLogin.css'; // Import the CSS file for styling
import logo from 'src/assets/images/logos/AA.png';
import facebookLogo from 'src/assets/images/logos/facebook.png'; // Import Facebook logo
import githubLogo from 'src/assets/images/logos/github.png'; // Import GitHub logo
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material'; // Import MUI components

const Register = () => {
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
                    Register
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
                   
                    <Grid container justifyContent="center" sx={{ mt: 1 }}> {/* Reduce margin top */}
                        <Grid item>
                            <Typography variant="body2">
                                Do you want to Login? <Link to="/auth/login">Sign an account</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;

