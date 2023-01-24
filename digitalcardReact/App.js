import React from 'react'
import ReactDom from 'react-dom'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'


function App() {
    return (
        <div className="app">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

export default App;