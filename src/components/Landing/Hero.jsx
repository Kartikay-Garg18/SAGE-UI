import React from 'react'
import Navbar  from './Navbar.jsx'
import Footer from './Footer.jsx'
import Testimonials from '../Testimonials/Testimonials.jsx'
import Features from '../Features/Features.jsx'
import FAQ from '../FAQ.jsx'


export default function Hero(){
    return(
        <div>
            <Navbar/>
            <main>
            
                <Testimonials />
                <Features />
                <FAQ/>
                
                
            </main>
            <Footer />
        </div>
    )
}