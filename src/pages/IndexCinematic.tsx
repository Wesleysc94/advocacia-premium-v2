import React from 'react';
import Navbar from '@/components/cinematic/Navbar';
import Hero from '@/components/cinematic/Hero';
import Reviews from '@/components/cinematic/Reviews';
import Treatments from '@/components/cinematic/Treatments';
import Features from '@/components/cinematic/Features';
import BeforeAfterGallery from '@/components/cinematic/BeforeAfterGallery';
import Team from '@/components/cinematic/Team';
import Faq from '@/components/cinematic/Faq';
import About from '@/components/cinematic/About';
import Contact from '@/components/cinematic/Contact';
import Footer from '@/components/cinematic/Footer';

const IndexCinematic = () => {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-accent-foreground select-none">
            <Navbar />
            <main>
                <div id="inicio">
                    <Hero />
                </div>
                <Treatments />
                <div id="especialidades">
                    <Features />
                </div>
                <BeforeAfterGallery />
                <Reviews />
                <Team />
                <Faq />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default IndexCinematic;
