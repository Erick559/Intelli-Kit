import Image from "next/image";
import { Section } from "./section";
import { Button } from "./ui/button";
import Link from "next/link";
import SecondaryButton from "./ui/secondary-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "@/constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./notification";

const Hero = () => {
    const parallaxRef = useRef(null);
    return (
        <Section 
            className='pt-[12rem] -mt-[5.25rem]'
            crosses
            crossesOffset='lg:translate-y-[5.25rem]'
            customPaddings
            id='hero'
        >
            <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative" ref = {parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="font-bold font-grotesk text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
                        Explore The Capabilites of AI: With <span className="inline-block relative"> Mimir <Image className="absolute top-full left-0 w-full xl:-mt-2" src='/curve.png' alt='curve-border' width={624} height={28}/></span>
                    </h1>
                    <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Unleash The Power of AI With Mimir: Elevate Your Workflows with AI Models for Chat, Code Generation, and Beyond
                    </p>

                    <Link
                        href='#pricing'
                    >
                        <SecondaryButton className="px-5">
                            Get Started {<ArrowRightIcon/>}
                        </SecondaryButton>
                    </Link>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8  rounded-[1rem]">
                            <div className="aspect-[30/40] rounded-[0.9rem] overflow-hidden md:aspect-[400/200] lg:aspect-[1024/490] ">
                                <Image src='/preview.png' alt='preview image' className='hidden w-full md:flex '  width={1024} height={490}/>
                                <Image src='/preview-mobile.png' alt='preview image' className='w-full md:hidden '  width={1024} height={490}/>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon,index)=>(
                                            <li className="p-5" key={index}>
                                                <Image src={icon} alt={icon} width={25} height={25}/>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification 
                                        className='hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] lg:flex'
                                        title='Code Generation'
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                        <Gradient />
                    </div>

                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2">
                        <Image className="w-full" src='/hero-background.jpg' alt="hero background" width={1440} height={1800}/>
                    </div>
                    <BackgroundCircles />
                </div>
            </div>
        </Section>
    )    
}

export default Hero;