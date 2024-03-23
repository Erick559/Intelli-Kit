'use client'

import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import NavigationBar from "@/components/landing-page/navigation-bar";
import Pricing from "@/components/landing-page/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {BrowserRouter as Router} from 'react-router-dom';

const LandingPage = () => {
    return (  
        <>
            <div className="pt-[4.75rem] lg:-[5.25rem] overflow-hidden bg-n-8 text-white !scroll-smooth">
                <NavigationBar />
                <Hero />
                <Features />
                <Pricing />
                <Footer />
            </div>
        </>
    );
}
 
export default LandingPage;