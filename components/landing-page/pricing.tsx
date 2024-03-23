import Image from "next/image"
import { Section } from "./section"
import { BackgroundCircles } from "../design/Header"
import { ScrollParallax } from "react-just-parallax"
import Heading from "./Heading"
import PriceList from "./price-list"
import { LeftLine,RightLine } from "../design/Pricing"


const Pricing = () => {
  return (
    <Section
      id='pricing'
      className='overflow-hidden'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      >
        <div className=" max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
          <div className="hidden relative mb-[6.5rem] lg:flex justify-center">
              <Image
                className="relative z-1" 
                src="/4-small.png"
                width={255}
                height={255}
                alt="pricing image"
              />
           
              <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <ScrollParallax>
                  <Image 
                    src='/stars.svg'
                    className="w-full"
                    width={950}
                    height={400}
                    alt="Stars"
                  />
                </ScrollParallax>
              </div>
          </div>

          <Heading
                className='flex flex-col gap-3 md:items-center md:justify-center' 
                tag = 'Get Started with Mimir'
                title = 'Flexible Pricing for All Needs'
          />

          <div className="relative">
              <PriceList />
              <LeftLine />
              <RightLine />
          </div>
          
        </div>
    </Section>
  )
}

export default Pricing
