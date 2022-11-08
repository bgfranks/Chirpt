import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'chript-32bac.firebaseapp.com',
  projectId: 'chript-32bac',
  storageBucket: 'chript-32bac.appspot.com',
  messagingSenderId: '564571486813',
  appId: '1:564571486813:web:b074b0e4c068f4ba5f2bb4',
  measurementId: 'G-VJCRT2G47E',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const storage = getFirestore()
export const auth = getAuth()
const analytics = getAnalytics(app)
