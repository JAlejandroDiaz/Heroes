import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import HeroesApp from './HeroesApp'
import {FirebaseAppProvider} from 'reactfire'
import firebaseConfig from './firebase-confing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={ firebaseConfig } >
    <Suspense fallback={<p>Cargando...</p>}>
      <HeroesApp />
    </Suspense>
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
