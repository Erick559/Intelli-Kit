'use client'

import NavigationBar from "@/components/navigation-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (  
        <>
            <div className="h-full pt-[4.75rem] lg:-[5.25rem] overflow-hidden bg-n-8 text-white">
                <NavigationBar />
            </div>
        </>
    );
}
 
export default LandingPage;