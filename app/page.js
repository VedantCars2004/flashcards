import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar } from '@mui/material';
import { SignedOut, SignedIn } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      {/* Sticky Header */}
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flashcards AI
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button variant="contained" color="primary" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <Button color="inherit" href="/flashcards">Dashboard</Button>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', py: 12 }}>
          <Box sx={{ flex: 1, pr: 4 }}>
            <Typography variant="h2" gutterBottom>
              Transform Text into Flashcards
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Effortlessly create flashcards from any text and enhance your learning experience.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/sign-up">
              Get Started
            </Button>
          </Box>
          <Box sx={{ flex: 1 }}>
            {/* Add hero image or illustration here */}
            <img src="/hero-image.svg" alt="Flashcards illustration" style={{ width: '100%' }} />
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Feature cards (same as before) */}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ py: 8, backgroundColor: '#f7f7f7' }}>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Add testimonial cards here */}
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Pricing cards (same as before, but highlight recommended plan) */}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Add footer content here */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;