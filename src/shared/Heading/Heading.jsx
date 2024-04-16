
const Heading = ({title, heading}) => {
  return (
    <div>
      <p className="font-poppins font-semibold text-[15px] text-[#5E6282] text-center uppercase">{title}</p>
      <p className="text-[#14183E] font-volkhov text-[35px] text-center font-bold">{heading}</p>
    </div>
  )
}

export default Heading