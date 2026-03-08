import React from 'react';
import Navbar from '@/components/cinematic/Navbar';
import Hero from '@/components/cinematic/Hero';
import About from '@/components/cinematic/About';
import { PracticeAreas } from '@/components/cinematic/Treatments';
import Features from '@/components/cinematic/Features';
import { BlogPreview } from '@/components/cinematic/BlogPreview';
import Reviews from '@/components/cinematic/Reviews';
import Contact from '@/components/cinematic/Contact';
import Footer from '@/components/cinematic/Footer';

const IndexCinematic = () => {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-gold selection:text-dark select-none">
            <Navbar />
            <main>
                <div id="inicio">
                    <Hero />
                </div>
                <About />
                <div id="especialidades">
                    <PracticeAreas />
                </div>
                <Features />
                <BlogPreview />
                <Reviews />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default IndexCinematic;
