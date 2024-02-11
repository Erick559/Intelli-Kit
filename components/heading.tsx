import { cn } from "@/lib/utils";

interface HeadingProps{
    title:string;
    description:string;
    icon:any;
    iconColor?:string;
}

const Heading = ({
    title,
    description,
    icon:Icon,
    iconColor
}:HeadingProps) => {
    return ( 
        <>
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
                <div className={cn("p-2 2-fit rounded-md")}>
                    <Icon className={cn("w-8 h-8", iconColor)} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-red-400 to-red-500 inline-block text-transparent bg-clip-text">
                        {title}    
                    </h2>                
                </div>
            </div>
        </>
     );
}
 
export default Heading;