import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

const Experience = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3} >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                Experience
            </Typography>
            <Card sx={{ width: '100%', maxWidth: 1000, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'}, mt: 3, padding: 2,}}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Product Manager - <Image src="/icici-logo.png" alt="ICICI Bank Logo" width={30} height={30} /> ICICI Bank (June 2023 - Dec 2023)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        1. Developed comprehensive BRS and test cases for the trade finance department to ensure clarity and alignment of project objectives. Collaborated with cross-functional teams to gather requirements, define scope, and document detailed specifications.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        2. Led the development and enhancement of customer-facing applications, ensuring a user-friendly experience and seamless functionality. Conducted thorough UAT for new product introductions and migrations, identifying and resolving issues to guarantee smooth deployment
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        3. Worked on implementation and optimization of TradeOnline, managed the migration of InstaEPC to NTS and Helpdesk to iCRM.
                    </Typography>   
                </CardContent>
            </Card>
        </Box>
    )
};

export default Experience;