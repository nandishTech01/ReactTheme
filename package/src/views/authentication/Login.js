// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Grid, Box, Card, Stack, Typography } from '@mui/material';

// // components
// import PageContainer from 'src/components/container/PageContainer';
// import Logo from 'src/layouts/full/shared/logo/Logo';
// import AuthLogin from './auth/AuthLogin';

// const Login2 = () => {
  
//   return (
//     <PageContainer title="Login" description="this is Login page">
//       <Box
//         sx={{
//           position: 'relative',
//           '&:before': {
//             content: '""',
//             background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
//             backgroundSize: '400% 400%',
//             animation: 'gradient 15s ease infinite',
//             position: 'absolute',
//             height: '100%',
//             width: '100%',
//             opacity: '0.3',
//           },
//         }}
//       >
//         <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             lg={4}
//             xl={3}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <Logo />
//               </Box>
//               <AuthLogin
//                 subtext={
//                   <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
//                     Your Social Campaigns
//                   </Typography>
//                 }
//                 subtitle={
//                   <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
//                     <Typography color="textSecondary" variant="h6" fontWeight="500">
//                       New to Modernize?
//                     </Typography>
//                     <Typography
//                       component={Link}
//                       to="/auth/register"
//                       fontWeight="500"
//                       sx={{
//                         textDecoration: 'none',
//                         color: 'primary.main',
//                       }}
//                     >
//                       Create an account
//                     </Typography>
//                   </Stack>
//                 }
//               />
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </PageContainer>
//   );
// };

// export default Login2;

import React, { useState } from 'react';
import './auth/AuthLogin.css'; // Import the CSS file for styling
import logo from 'src/assets/images/logos/AA.png'; 


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
        <div className="login-container">
            <div className="login-card">
                <img src={logo} alt="Logo" className="login-logo" />
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
