import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	NextOrObserver,
	User,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

/**
 * Firebase auth
 */
/**
 * This is used to create a user by Firebase auth
 * @param email
 * @param password
 * @returns
 */
export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * This is used to sign in with email & password
 * @param email
 * @param password
 * @returns
 */
export const signInAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * This is used to sign in by using google popup
 * @returns
 */
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

/**
 * This is used to sign out
 * @returns
 */
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				// userAuth is UserImpl {accessToken, email, ....}
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};

/**
 * Firestore
 */
export type ObjectsToAdd = {
	title: string;
};
/**
 * This is used to write prepared json file into firebase
 * async function always return promise object, but in this case, it return nothing, so that use Promise<void>
 * @param collectionKey is collection name
 * @param objectsToAdd
 */
export const addCollectionAndDocuments = async <T extends ObjectsToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
): Promise<void> => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		// object.title.toLowerCase() is document name
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
	console.log("done");
};

/**
 *	This is used to get categories collection
 * @returns
 */
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	// as we get this from db, typescript have no idea on it, so we need to cast docSnapshot.data() by using as keyword
	return querySnapshot.docs.map(
		(docSnapshot) => docSnapshot.data() as Category
	);
};

/**
 * This is used to create a user in Firestore.
 * If userAuth is empty, return nothing
 * If user is existed, then return userSnapshot
 * If user is non-existed, then create user in Firestore, then return userSnapshot
 * @param userAuth is from Firebase auth
 * @param additionalInformation
 * @returns
 */
export type AdditionalInformation = {
	displayName?: string;
};
export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserData>;
};
