import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff'}}>
            <Typography variant="body2">
                © 2024 NS. All rights reserved.
            </Typography>
        </Box>
    )
};

export default Footer;