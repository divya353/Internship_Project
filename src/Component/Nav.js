// import { Icon } from '@iconify/react/dist/iconify.js';
// import MenuIcon from '@mui/icons-material/Menu';
// import AppBar from '@mui/material/AppBar';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Toolbar from '@mui/material/Toolbar';
// import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
// // import LOGO from '../Assets/LOGO.png';
// import * as React from 'react';

// function Nav() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#e74c3c' }}>
//       <Toolbar sx={{ display: 'flex' }}>
//         {/* Logo section */}
//         <Typography
//           variant="h6"
//           noWrap
//           component="a"
//           href="#"
//           sx={{
//             fontFamily: 'monospace',
//             fontWeight: 700,
//             letterSpacing: '.3rem',
//             color: 'inherit',
//             textDecoration: 'none',
//           }}
//         >
//          {/* <img src='../Assets/LOGO.png' height={120} width={150}/> */}
//          Tech-Trek & Trend
//         </Typography>

//         {/* Menu items for desktop */}
//         <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{ my: 2, color: 'white', display: 'block' }}
//           >
//             <Tooltip title="Home">
//               <Icon icon="ic:outline-home" fontSize={30} />
//             </Tooltip>
//           </Button>

//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{ my: 2, color: 'white', display: 'block' }}
//           >
//             <Tooltip title="Following">
//               <Icon icon="mingcute:user-follow-line" fontSize={25} />
//             </Tooltip>
//           </Button>

//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{ my: 2, color: 'white', display: 'block' }}
//           >
//             <Tooltip title="Answer">
//               <Icon icon="material-symbols:post-add" fontSize={25} />
//             </Tooltip>

//           </Button>
//           {/* <TextField
//             sx={{ my: 2, color: 'white', display: 'block' }}
//             label='Search'
//             size='small'
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           /> */}
//         </Box>

//         <Box sx={{ display: 'flex', ml: 'auto' }}>
//           {/* Responsive menu for mobile */}
//           <Box sx={{ display: { xs: 'flex', sm: 'none' }, ml: 'auto' }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">
//                   <Icon icon="ic:outline-home" />
//                 </Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">
//                   <Icon icon="mingcute:user-follow-line" />
//                 </Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">
//                   <Icon icon="material-symbols:post-add" />
//                 </Typography>
//               </MenuItem>
//             </Menu>
//           </Box>

//           {/* User avatar and settings */}
//           <Box>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ mt: 1 }}>
//                 <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center">Profile</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center">Account</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center">Dashboard</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center">Logout</Typography>
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Nav;

import { Icon } from '@iconify/react/dist/iconify.js';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" sx={{ backgroundColor: '#e74c3c' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo section */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#ffffff',
            textDecoration: 'none',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          Tech-Trek & Trend
        </Typography>

        {/* Menu items for desktop */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: '#ffffff', display: 'flex', alignItems: 'center', mx: 2 }}
          >
            {/* <Tooltip title="Home"> */}
              <Icon icon="ic:outline-home" fontSize={30} />
            {/* </Tooltip> */}
            <Typography sx={{ ml: 1 }}>Home</Typography>
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: '#ffffff', display: 'flex', alignItems: 'center', mx: 2 }}
          >
            {/* <Tooltip title="Following"> */}
              <Icon icon="mingcute:user-follow-line" fontSize={25} />
            {/* </Tooltip> */}
            <Typography sx={{ ml: 1 }}>Following</Typography>
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: '#ffffff', display: 'flex', alignItems: 'center', mx: 2 }}
          >
            {/* <Tooltip title="Answer"> */}
              <Icon icon="material-symbols:post-add" fontSize={25} />
            {/* </Tooltip> */}
            <Typography sx={{ ml: 1 }}>Answer</Typography>
          </Button>
        </Box>

        {/* Responsive menu for mobile */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: '#ffffff' }} />
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
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Icon icon="ic:outline-home" fontSize={24} />
                <Typography>Home</Typography>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Icon icon="mingcute:user-follow-line" fontSize={24} />
                <Typography>Following</Typography>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Icon icon="material-symbols:post-add" fontSize={24} />
                <Typography>Answer</Typography>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* User avatar and settings */}
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
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
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
