import Image from "next/image"
import { Section } from "./section"
import { socials } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <Section
        className='!py-0 !py-10'
        id='footer'
        crosses
    >
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
            <div className="relative flex flex-col items-center px-10 justify-center gap-5 lg:justify-between lg:flex-row">
                <p className="text-sm">&#169; {`${new Date().getFullYear()}.`}All Rights Reserved</p>
                <div className="flex gap-8">
                    {socials.map((item,index)=> (
                       <Link className="flex items-center justify-center bg-n-7 w-10 h-10 rounded-full border-none transition-colors hover:bg-n-6" key={item.id} href={item.url} target="_blank">
                           <Image
                               src={item.iconUrl}
                               alt="socials"
                               width={15}
                               height={15}
                           />
                       </Link>   
                    ))}
                </div>
            </div>
        </div>
    
    </Section>
  )
}

export default Footer
