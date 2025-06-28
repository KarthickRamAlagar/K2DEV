import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Switch,
  Divider
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Diversity1Icon from '@mui/icons-material/Diversity1'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import BedtimeIcon from '@mui/icons-material/Bedtime'
import LightModeIcon from '@mui/icons-material/LightMode'
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#groups'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <LocalGroceryStoreIcon />
              </ListItemIcon>
              <ListItemText primary='MarketPlace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <Diversity1Icon />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <Avatar
                  sx={{ width: '30px', height: '30px' }}
                  alt='developer'
                  src='./Avatar.jpg'
                />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <Divider
            orientation='horizontal'
            variant='large'
            sx={{ width: '10rem' }}
          />
          <ListItem disablePadding>
            <ListItemButton component='a' href='#toggle-theme'>
              <ListItemIcon>
                {mode === 'light' ? <BedtimeIcon /> : <LightModeIcon color='warning' />}
              </ListItemIcon>
              <Switch
                checked={mode === 'dark'}
                onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
