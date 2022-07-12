import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAwAzp3V-luELTnj0v8G0eANn9B0kPojXU',
  authDomain: 'jaboon-barbato.firebaseapp.com',
  projectId: 'jaboon-barbato',
  storageBucket: 'jaboon-barbato.appspot.com',
  messagingSenderId: '951310403520',
  appId: '1:951310403520:web:2c0906792a3daf1c72aa25'
}

const firebaseApp = initializeApp(firebaseConfig)

const database = getFirestore(firebaseApp)

export { database }
