// pages/index.js
import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { SignedOut, SignedIn } from '@clerk/nextjs';


const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Transform Text into Flashcards
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Effortlessly create flashcards from any text and enhance your learning experience.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="secondary" sx={{ mb: 2 }}>
          Learn More
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Simple Text Input
                </Typography>
                <Typography color="textSecondary">
                  Easily input text and convert it into flashcards with just a few clicks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  AI-Enhanced Flashcards
                </Typography>
                <Typography color="textSecondary">
                  Our AI technology refines your content into effective learning flashcards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Customizable Designs
                </Typography>
                <Typography color="textSecondary">
                  Customize your flashcards to fit your study preferences and style.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 6, backgroundColor: '#f7f7f7' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Free Plan
                </Typography>
                <Typography color="textSecondary">$0/month</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Basic features to get started with flashcard creation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Pro Plan
                </Typography>
                <Typography color="textSecondary">$9.99/month</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Additional features and priority support for power users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enterprise Plan
                </Typography>
                <Typography color="textSecondary">$29.99/month</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  All features plus team collaboration and advanced tools.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <SignedOut>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3, mr: 2 }} href = "/sign-up">
          Sign Up
        </Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 3 }} href = "/sign-in">
          Login
        </Button>
      </Box>
      </SignedOut>
      <SignedIn>
        <Button variant="contained" color="primary" sx={{ mt: 3, mr: 2 }} href = "/dashboard">
          Dashboard
        </Button>
      </SignedIn>
    </Container>
  );
};

export default Home;
