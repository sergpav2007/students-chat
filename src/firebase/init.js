import { app } from './config';
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth';

export const auth = getAuth();
export const firestore = getFirestore(app);
export const firebase = app;