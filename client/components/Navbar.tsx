import { AppBar, Button, Drawer, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import  { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu'
import { theme } from '@/settings/theme';

const menuItems = [
    {text: 'Главная', href: '/'},
    {text: 'Список треков', href: '/tracks'},
    {text: 'Список альбомов', href: '/albums'}
]

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        {menuItems.map(({text, href}, index) => (
          <ListItem key={href} onClick={() => router.push(href)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <div>
        <AppBar position="static" color={'secondary'}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Music platform by gmt9n
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </div>
  );
}

export default Navbar;