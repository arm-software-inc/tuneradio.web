import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

// TODO: add google clientId to env file
ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="554341061191-aqo36nc4r39c1kc82o92pu3qokebb5tm.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
