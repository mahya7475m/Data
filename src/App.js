import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
const App = () => {
    return (
        <Router>
            <Header />
            <main className="pay-20">
                <Container>
                    <Route path="/" component={Home} exact />
                    <Route path="/prudact/:id" component={Product} />
                </Container>
            </main>
            <Footer />
        </Router>
        fetch('')
        .then(response => response.json())
        .then(data => console.log(data))
    )
}

export default App

