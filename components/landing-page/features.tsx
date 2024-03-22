import { benefits } from "@/constants"
import Heading from "./Heading"
import { Section } from "./section"
import { Card } from "../ui/card"
import Image from "next/image"
import { GradientLight } from "../design/Features"

const Features = () => {
  return (
    <Section
        className='font-grotesk' 
        id="features"
    >
        <div className="relative max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] z-2">
            <Heading className='font-semibold max-w-lg md:max-w-md lg:max-w-2xl' title='Mimir: Your AI Co-Pilot for Effortless Creation'/>
            <div className="flex flex-wrap gap-10 mb-10">
              {benefits.map((item)=> (
                <div className="block relative rounded-sm p-0.5 bg-gradient-to-br from-blue-300 to-pink-300 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  key={item.id}>

                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="text-2xl leading-normal mb-5">
                      {item.title}
                    </h5>
                    <p className="font-light text-[0.875rem] leading-6 md:text-base mb-6 text-n-3">
                      {item.text}
                    </p>
                    <div className="flex items-center mt-auto">
                      <Image
                        src = {item.iconUrl}
                        alt={item.title}
                        width = {30}
                        height={30}
                      />
                    </div>
                  </div>
                  {item.light&& <GradientLight />}
                  <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#features)" }}>
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                      {item.imageUrl &&  
                      <Image 
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />}
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

    </Section>
  )
}

export default Features
