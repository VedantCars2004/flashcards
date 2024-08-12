"use client"
import {useUser} from '@clerk/nextjs'
export default function Flashcard() {
    const {isLoaded,user,isSignedIn}=useUser();
    if (!isLoaded || !isSignedIn) {
        return null;
    }
    console.log(user.id)
    return<></>
}