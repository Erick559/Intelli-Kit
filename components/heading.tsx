interface HeadingProps{
    title:string;
    description:string;
    icon:any;
    iconColor?:string;
    bgColor?:string;
}

const Heading = ({
    title,
    description,
    icon,
    iconColor,
    bgColor
}:HeadingProps) => {
    return ( 
        <div>
            Heading Component
        </div>
     );
}
 
export default Heading;