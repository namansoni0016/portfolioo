import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { blue } from '@mui/material/colors';


export default function Home() {
  const color = blue[600];
  return (
    <Box display="flex" flexDirection={{xs: 'column', md: 'row'}}
      justifyContent="space-between" alignItems="center" height="100vh" overflow="auto" padding={3}>
      <Box textAlign="center" width={{xs: '100%', md:'50%'}} mb={3}>
        <Typography variant="h2"fontWeight="bold">
          Hi, I'm
        </Typography>
        <Typography variant="h2" color={color} fontWeight="bold" gutterBottom>
          Naman Soni
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          I'm a Full-Stack Developer with the knowledge of creating modern web applications with innovative solutions.
        </Typography>
        <Button variant="contained" color="inherit" href="/resume.pdf" download>
          Download Resume
        </Button>
      </Box>
      <Box width={{xs: '90%', md: '50%'}} height={{ xs: '50%', md: '80%' }} position="relative" mb={3} 
      sx={{ border: '2px solid #1e88e5', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {transform: 'scale(1.05)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}  
      }} textAlign="center">
        <Image src="/profile.jpg" alt="Profile Picture" layout="fill" objectFit="cover"/>
      </Box>
    </Box>
  );
}
