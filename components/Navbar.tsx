import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
    const navItems = [
        { text: 'About', link: '/about'},
        { text: 'Experience', link: '/experience'},
        { text: 'Projects', link: '/projects'},
        { text: 'Contact Me', link: '/contact'}
    ]
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" fontWeight="bold" sx={{flexGrow: 1}}>
                    <Link href="/">NS</Link>
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{display: {xs: 'block', md: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} sx={{display: {xs: 'block', md: 'none'}}}>
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index} component={Link} href={item.link} onClick={toggleDrawer} sx={{ textDecoration: 'none' }}>
                                <ListItemText sx={{color: 'white', textDecoration: 'none', '&:hover': { color: 'primary.main' }}} primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box sx={{ display: { xs: 'none', md: 'block'}}}>
                    {navItems.map((item, index) => (
                        <Button key={index} color="inherit" component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: 'primary.main' } }}>
                            {item.text}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;