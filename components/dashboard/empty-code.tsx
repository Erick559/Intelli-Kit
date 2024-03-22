import Image from "next/image";

interface EmptyProps{
    label:string
}

const EmptyCode = ({
    label
}: EmptyProps)=> {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
             <div className="relative h-80 w-80">
                <Image 
                    alt="Empty Field"
                    fill
                    src="/developer.png"
                />
             </div>

             <p className="text-muted-foreground text-sm text-center">
                {label}
             </p>
        </div>
    );
}

export default EmptyCode;