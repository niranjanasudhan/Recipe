import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import logo from "./../img/logo.png";
import { Link } from 'react-router-dom';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navbar={
      
    backgroundColor:"#d1965c",
    height: "90px"
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
  return (
    <AppBar position="static" style={navbar}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
  
        <img
            src={logo}
            width={"200px"}
            height={"75px"}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'black',
            textDecoration: 'none',
            paddingLeft:'10px',
            
          }}
        >
          {/* Tasty Treats */}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
          
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/'}>Home</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/Cusine/Indian'}>Indian</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/Cusine/Italian'}>Italian</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/Cusine/American'}>American</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/Cusine/Chinese'}>Chinese</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'black'}}><Link style={{textDecoration:"none"}} to={'/add'}>Add Cusine</Link></Typography>
              </MenuItem>
              
           
          </Menu>
        </Box>
      
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {/* MOVIE MANAGEMENT APP */}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{marginLeft:"60px"}}>
        
            <Button style={{color:'black',fontSize:'16px'}}
             
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link style={{textDecoration:"none"}} to={'/'}>Home</Link>
            </Button>
            <Button style={{color:'black',fontSize:'16px'}}
             
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
            <Link style={{textDecoration:"none"}} to={'/Cusine/Indian'}>Indian</Link>
           </Button>
           <Button style={{color:'black',fontSize:'16px'}}
             
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             <Link style={{textDecoration:"none"}} to={'/Cusine/Italian'}>Italian</Link>
           
           </Button>
           <Button style={{color:'black',fontSize:'16px'}}
             
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             <Link style={{textDecoration:"none"}} to={'/Cusine/American'}>American</Link>
           
           </Button>
           <Button style={{color:'black',fontSize:'16px'}}
             
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             <Link style={{textDecoration:"none"}} to={'/Cusine/Chinese'}>Chinese</Link>
           
           </Button>
           <Button style={{color:'black',fontSize:'16px'}}
             
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             <Link style={{textDecoration:"none"}} to={'/add'}>Add Cusine</Link>
           
           </Button>

           
         
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          {/* <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip> */}
          {/* <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu> */}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar