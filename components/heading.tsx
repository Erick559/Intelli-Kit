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
            </div>
        </>
     );
}
 
export default Heading;