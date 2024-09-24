import { AppBar, Toolbar, Typography, Box, Link as MuiLink, IconButton, Drawer, List, ListItem, ListItemText, } from "@mui/material";
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
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h4" fontWeight="bold" component="div">
                    <Link href="/">NS</Link>
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{display: {xs: 'block', md: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} sx={{display: {xs: 'block', md: 'none'}}}>
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index} component={Link} href={item.link} onClick={toggleDrawer} sx={{ textDecoration: 'none' }}>
                                <ListItemText sx={{color: 'white', textDecoration: 'none', '&:hover': { color: '#1e88e5' }}} primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box sx={{ display: { xs: 'none', md: 'block'}}}>
                <Box sx={{ display: "flex", gap: 3 }}>
                    {navItems.map((item, index) => (
                        <Link href={item.link} passHref key={index} legacyBehavior>
                            <MuiLink underline="none" color="inherit" sx={{ '&:hover': { color: '#1e88e5' }, cursor: 'pointer' }} aria-label={item.text}>
                                {item.text}
                            </MuiLink>
                        </Link>
                    ))}
                </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;