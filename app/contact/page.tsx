'use client'
import { Box, Typography, Card, CardContent, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
    const [ emailData, sendEmailData ] = useState({ subject: '', body: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        sendEmailData({ ...emailData, [name]: value });
    };
    const handleSubmit = () => {
        const { subject, body } = emailData;
        const mailToLink = `mailto:namantsoni@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailToLink;
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3} >
            {/* Heading */}
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                Contact Me
            </Typography>
            {/* Links */}
            <Card sx={{width: '100%', maxWidth: 800, padding: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: 3}} >
                <CardContent>
                    <Box display="flex" justifyContent="space-around" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
                            <Typography variant="body1" sx={{textDecoration: 'none', '&:hover': { color: '#1e88e5' }}} marginLeft={1}>
                                <Link href="https://www.linkedin.com/in/naman-soni-016/" target="_blank" rel="noopener" color="primary">LinkedIn</Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Image src="/github.png" alt="GitHub" width={30} height={30} />
                            <Typography variant="body1" sx={{textDecoration: 'none', '&:hover': { color: '#1e88e5' }}} marginLeft={1}>
                                <Link href="https://github.com/namansoni0016" target="_blank" rel="noopener" color="primary">GitHub</Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Image src="/mail.png" alt="Email" width={30} height={30} />
                            <Typography variant="body1" sx={{textDecoration: 'none', '&:hover': { color: '#1e88e5' }}} marginLeft={1}>
                                <Link href="mailto:namantsoni@gmail.com" color="primary">namantsoni@gmail.com</Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Image src="/telephone.png" alt="phone" width={30} height={30} />
                            <Typography variant="body1" marginLeft={1}>
                                +91 9426651237
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            {/* Email form card */}
            <Card sx={{ width: '100%', maxWidth: 1000, padding: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Send me a message
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column">
                        <TextField name="subject" label="Subject" variant="outlined" fullWidth margin="normal" value={emailData.subject} onChange={handleChange} required/>
                        <TextField name="body" label="Body" variant="outlined" fullWidth margin="normal" multiline rows={4} required value={emailData.body} onChange={handleChange}/>
                        <Button type="submit" variant="contained" color="inherit" sx={{ marginTop: 2 }}>Send</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
};

export default Contact;