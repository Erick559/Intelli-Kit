import { pricing } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

const PriceList = () => {
   
  return (
    <div className="flex gap-[1rem] justify-center max-lg:flex-wrap">
      {pricing.map((item)=>(
        <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-10 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-teal-500 [&>h4]:even:animate-gradient-x [&>h4]:even:bg-gradient-to-r from-violet-400 via-red-400 to-red-500 [&>h4]:even:text-transparent [&>h4]:even:bg-clip-text [&>h4]:last:text-orange-500">
            <h4 className={`text-[2rem] leading-normal mb-4 [&>h4]:first:text-teal-500 [&>h4]:odd:text-color-1`}>{item.title}</h4>
            <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
            <div className="flex items-center gap-1 h-[5.5rem] mb-6">
                {item.price && (
                    <>
                        <div className="text-[2rem] leading-normal md:text-[2.5rem]">$</div>
                        <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                    </>
                )}
            </div>
            <Link href={item.price? '/dashboard':'mailto:erickungu82@gmail.com'}>
                <Button className="mb-6 w-full" variant={item.price === '9.99' ? 'premium' : 'default'}>
                    {item.price ? 'Get Started' : 'Contact Us'}
                </Button> 
            </Link>
            <ul>
                {item.features.map((feature,index)=>(
                    <li className="flex items-start gap-4 py-5 border-t border-n-6" key={index}>
                        <Image 
                            src='/check.svg'
                            width={20}
                            height={20}
                            alt="Check"
                        />
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
      ))}
    </div>
  )
}

export default PriceList
