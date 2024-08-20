import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import './App.css'
import Header from './Components/ContactHeader/Header'
import ContactForm from './Components/ContactForm/ContactForm'
const App = () => {
  return (
    <div>
      <Navigation />
      <div style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
      }}>
        <Header />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
