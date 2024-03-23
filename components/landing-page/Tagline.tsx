import brackets from "../design/Brackets"

const Tagline = ({children,className}) => {
  return (
    <div className={`font-grotesk font-light text-xs tracking-tagline uppercase flex items-center ${className || ''}`}>
      {brackets('left')}
      <div className="mx-3 mb-1 text-n-3 ">
            {children}
      </div>
      {brackets('right')}
    </div>
  )
}

export default Tagline
