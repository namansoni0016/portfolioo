import { Box, Typography } from "@mui/material";

const AboutPage = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                I am a passionate software developer with a strong focus on web development.
            </Typography>
        </Box>
    )
}

export default AboutPage;