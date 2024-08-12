import React from 'react';
import { 
  Container, Box, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar,
  List, ListItem, ListItemIcon, ListItemText, Chip
} from '@mui/material';
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const features = [
  { title: 'AI-Powered Generation', description: 'Transform any text into flashcards with our advanced AI', icon: <AutoAwesomeIcon /> },
  { title: 'Spaced Repetition', description: 'Optimize your learning with scientifically-proven methods', icon: <SchoolIcon /> },
  { title: 'Progress Tracking', description: 'Monitor your improvement with detailed analytics', icon: <AnalyticsIcon /> },
  { title: 'Cloud Sync', description: 'Access your flashcards from any device, anytime', icon: <CloudUploadIcon /> },
];

const pricingPlans = [
  { title: 'Basic', price: 'Free', features: ['100 AI-generated cards/month', 'Basic analytics', 'Web access'], highlighted: false },
  { title: 'Pro', price: '$9.99/month', features: ['Unlimited AI-generated cards', 'Advanced analytics', 'Web & mobile access', 'Priority support'], highlighted: true },
  { title: 'Team', price: '$49.99/month', features: ['Everything in Pro', 'Collaboration tools', 'Admin dashboard', 'API access'], highlighted: false },
];

const testimonials = [
  { name: 'Sarah L.', role: 'Medical Student', comment: 'Flashcards AI has revolutionized my study routine. I\'ve seen a 30% improvement in my retention!' },
  { name: 'John D.', role: 'Language Learner', comment: 'The AI-generated cards are spot-on. It\'s like having a personal tutor!' },
];

const Home = () => {
  return (
    <div>
      {/* Sticky Header */}
      <AppBar position="sticky" color="default" elevation={1}>
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
              Effortlessly create flashcards from any text and enhance your learning experience with AI-powered insights.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/sign-up">
              Get Started Free
            </Button>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src="/flashcards_image.jpg" alt="Flashcards illustration" style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 8 }} bgcolor = "lightblue">
          <Typography variant="h4" align="center" gutterBottom >
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" align="center" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ py: 8, backgroundColor: '#f7f7f7' }}>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.comment}"
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={plan.highlighted ? 4 : 2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  {plan.highlighted && (
                    <Chip
                      label="Most Popular"
                      color="secondary"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 16,
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography variant="h4" align="center" color="primary" gutterBottom>
                      {plan.price}
                    </Typography>
                    <List>
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} disableGutters>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button variant={plan.highlighted ? "contained" : "outlined"} color="primary" fullWidth>
                      Choose Plan
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, borderTop: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Flashcards AI
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Transforming the way you learn with AI-powered flashcards.
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[LinkedInIcon].map((Icon, index) => (
                  <Button key={index} color="inherit" href="#" target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} Flashcards AI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Home;