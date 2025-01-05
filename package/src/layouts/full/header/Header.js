import React, { useState } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons-react';

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCartDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setCartOpen(open);
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="text" color="inherit" href="#about-us">
            About Us
          </Button>
          <Button variant="text" color="inherit" href="#contact-us">
            Contact Us
          </Button>
          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <Badge
              // badgeContent={2}
              badgeContent={cartCount}
              color="error"
              classes={{ badge: 'MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError mui-i0swgi' }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Badge>
          </IconButton>
          <Button variant="contained" color="primary" target="_blank" href="http://localhost:5173/auth/login">
            Login/Register
          </Button>
          <Profile />
        </Stack>
      </ToolbarStyled>
      <Drawer anchor="right" open={cartOpen} onClose={toggleCartDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleCartDrawer(false)}
          onKeyDown={toggleCartDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Cart Item 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Cart Item 2" />
            </ListItem>
            {/* Add more cart items here */}
          </List>

          {/* <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} button>
                <ListItemAvatar>
                  <Avatar src={item.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <Typography variant="body2" color="textSecondary">
                      Quantity: {item.quantity}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
