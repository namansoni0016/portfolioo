import { Box, Typography, Card, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            title: 'Estate Edge',
            description: 'Developed a MERN stack real estate website allowing users to list properties for sale or rent. Integrated Firebase for storing images, implemented secure user authentication with JWT and Google OAuth. Built responsive user interfaces using React.js, Tailwind CSS and managed state with Redux. Developed features like advanced property search and image upload.',
            demoLink: '',
            githubLink: 'https://github.com/namansoni0016/estateEdge',
            imageSrc: '/project2.jpg',
        },
        {
            title: 'Money Mate',
            description: 'Developed a MERN stack expense tracker application, incorporating Redux for efficient state management and React Query for optimized data fetching and synchronization. Implemented a robust category-based system allowing users to create and manage income and expense categories, and dynamically link transactions to these categories. Focused on scalability and performance, ensuring seamless user interactions through the integration of Redux. Enhanced user experience by integrating interactive data visualizations, leveraging Chart.js.',
            demoLink: '',
            githubLink: 'https://github.com/namansoni0016/expense-tracker',
            imageSrc: '/project1.jpg',
        },
    ];
    return (
        <Box padding={3}>
            <Typography variant="h2" fontWeight="bold" textAlign="center" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', height: 'auto', flexDirection: { xs: 'column', md: 'row' }, }}>
                            <Box sx={{ flex: 1, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {project.description}
                                </Typography>
                                <Box display="flex" gap={2}>
                                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" passHref>
                                        <Button variant="contained" color="inherit" component="a" sx={{borderRadius: '50px', paddingX: 4, paddingY: 1}}>
                                            Demo
                                        </Button>
                                    </Link>
                                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer"    passHref>
                                        <Button variant="contained" color="inherit" component="a" sx={{borderRadius: '50px', paddingX: 4, paddingY: 1}}>
                                            GitHub
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '40%' }, position: 'relative', height: {xs: 200, md: 300} }}>
                                <Image src={project.imageSrc} alt={project.title} fill style={{ objectFit: 'cover', borderRadius: '8px' }} />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Projects;