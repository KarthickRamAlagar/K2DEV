import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material'
import { styled } from '@mui/material/styles'
import BackHandIcon from '@mui/icons-material/BackHand'
import SearchIcon from '@mui/icons-material/Search'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded'
import { useState } from 'react'
const StyleToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'Space-between'
})
const navStyle = {
  display: { xs: 'none', sm: 'block' }
}
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))
const Icon = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography variant='h6' sx={navStyle}>
          K<sup>2</sup>Dev
        </Typography>
        <BackHandIcon
          sx={{ display: { xs: 'block', sm: 'none' }, color: 'yellow' }}
        />
        <Search
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <SearchIcon sx={{ color: 'gray', marginRight: '5px' }} />
        <InputBase
  placeholder="Search…"
  sx={(theme) => ({
    width: '100%',
    color: 'gray',
    '& input::placeholder': {
      color: theme.palette.mode === 'dark' ? '#aaa' : '#555', // adjust as needed
      opacity: 1
    }
  })}
/>

        </Search>
        <Icon>
          <Badge badgeContent={4} color='error'>
            <MailRoundedIcon />
          </Badge>
          <Badge badgeContent={12} color='error'>
            <NotificationImportantRoundedIcon />
          </Badge>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt='developer'
            src='./Avatar.jpg'
            onClick={e => setOpen(true)}
          />
        </Icon>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt='developer'
            src='./Avatar.jpg'
          />
          <Typography color='warning' sx={{ fontWeight: 'bold' }}>
            Ram Alagar
          </Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
