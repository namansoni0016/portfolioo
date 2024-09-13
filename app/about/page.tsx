import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {/* Skills */}
                <Grid item xs={12} md={6}>
                    <Card sx={{padding: 3, borderRadius: "16px", boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'}
                    }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }} marginBottom={3}>
                                Skills
                            </Typography>
                            <Grid container spacing={2} justifyContent="center">
                                {[
                                    { name: 'JavaScript', logo: '/js.png' },
                                    { name: 'Typescript', logo: '/typescript.png' },
                                    { name: 'Next.js', logo: '/nextjs.png' },
                                    { name: 'React.js', logo: '/react.png' },
                                    { name: 'Node.js', logo: '/node.png' },
                                    { name: 'Express.js', logo: '/express.png' },
                                    { name: 'MongoDB', logo: '/mongodb.png' },
                                    { name: 'Redux', logo: '/redux.png' },
                                    { name: 'Tailwind Css', logo: '/tailwindcss.png' },
                                    { name: 'CSS', logo: '/css.png' },
                                    { name: 'HTML', logo: '/html.png' },
                                ].map((skill, index) => (
                                    <Grid item xs={6} sm={4} key={index} textAlign="center">
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <Box>
                                                <Image src={skill.logo} alt={`${skill.name} Logo`} width={40} height={40} />
                                            </Box>
                                            <Typography variant="body1" marginTop={1}>{skill.name}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Educational Background */}
                <Grid item xs={12} md={6}>
                    <Card sx={{padding: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',}
                    }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }} marginBottom={3}>Educational Background</Typography>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                <strong>Masters of Technology (M.Tech), Computer Science</strong>
                                <br/>
                                Indraprastha Institute of Information Technology (IIIT Delhi), 2023
                                <br/>
                                CGPA - 7.32/10
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                <strong>Bachelor of Engineering (B.E), Computer Engineering</strong>
                                <br/>
                                Silver Oak College of Engineering and Technology (GTU), 2021
                                <br/>
                                CGPA - 9.52/10
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutPage;