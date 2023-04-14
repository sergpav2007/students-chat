import * as fb from './init';
import firebaseCollectionTypes from './constants';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const getFirebaseSignInRequest = async () => {
    try {
        let docId = '';
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(fb.auth, provider)
            // .then((result) => {
            //     // This gives you a Google Access Token. You can use it to access the Google API.
            //     const credential = GoogleAuthProvider.credentialFromResult(result);
            //     const token = credential.accessToken;
            //     // The signed-in user info.
            //     const user = result.user;
            //     // IdP data available using getAdditionalUserInfo(result)
            //     // ...
            // }).catch((error) => {
            //     // Handle Errors here.
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // The email of the user's account used.
            //     const email = error.customData.email;
            //     // The AuthCredential type that was used.
            //     const credential = GoogleAuthProvider.credentialFromError(error);
            //     // ...
            // });;
        const user = response.user;
        const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.USERS);
        const query = await fireBaseRef
            .where('uid', '==', user.uid)
            .get();
        if (query.docs.length === 0) {
            await fireBaseRef.add({
                uid: user.uid,
                name: user.displayName,
                photoURL: user.photoURL,
                authProvider: 'google',
                email: user.email,
            })
                .then(docRef => docId = docRef.id);
        }
        return { uid: user.uid, docId }
    } catch (err) {
        console.error(err);
    }
};

export const firebaseSignOut = async docId => {
    if (docId) {
        const fireBaseUserRef = fb.firestore.collection(firebaseCollectionTypes.USERS);
        await fireBaseUserRef.doc(docId).delete();
    }
    await fb.auth.signOut();
};