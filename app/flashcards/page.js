"use client";

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import db from '@/firebase';
import { Card, CardContent, Typography, Container, Grid, CircularProgress, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Flashcard() {
    const { isLoaded, user, isSignedIn } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded || !isSignedIn || !user) {
            setIsLoading(false);
            return;
        }

        async function getFlashcards() {
            try {
                const docRef = doc(collection(db, 'users'), user.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const collections = docSnap.data().flashcards || [];
                    setFlashcards(collections);
                } else {
                    await setDoc(docRef, { flashcards: [] });
                }
            } catch (error) {
                console.error("Error fetching flashcards:", error);
                setError("Failed to load flashcards. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        }

        getFlashcards();
    }, [isLoaded, isSignedIn, user]);

    const handleCardClick = (name) => {
        router.push(`/flashcard?id=${name}`);
    };

    if (!isLoaded || isLoading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (!isSignedIn) {
        return (
            <Container>
                <Alert severity="warning">You are not signed in. Please sign in to view your flashcards.</Alert>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Your Flashcards
            </Typography>
            <Grid container spacing={3}>
                {flashcards.map((flashcard) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={flashcard.name}>
                        <Card
                            onClick={() => handleCardClick(flashcard.name)}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3,
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {flashcard.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {flashcard || 'No description available'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}