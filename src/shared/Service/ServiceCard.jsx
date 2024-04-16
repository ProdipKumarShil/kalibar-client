import icon from '../../assets/imgs/temple.png'
const ServiceCard = () => {
  return (
    <div className='h-[314px] rounded-[36px] p-11 border hover:shadow-lg hover:scale-105 duration-100'>
      <img className='w-[67px] h-[75px] mx-auto mb-[34px]' src={icon} alt="" />
      <p className='text-[#1E1D4C] text-[20px] mb-[15px] font-volkhov font-semibold text-center'>Best Flights</p>
      <p className='text-[#5E6282] text-center'>Engrossed listening. Park gate sell they west hard for the.</p>
    </div>
  )
}

export default ServiceCard