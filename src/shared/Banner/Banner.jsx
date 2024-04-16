import maa from '../../assets/imgs/maa_kali.png'

const Banner = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl gap-4 px-4 items-center mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <p className="text-primary mb-6 text-xl font-bold font-poppins">Best Destinations around the world</p>
          <p className="text-[84px] mb-7 leading-tight font-bold font-volkhov text-[#181E4B]">Travel, enjoy and live a new and full life</p>
          <p className="text-[#5E6282] mb-8 font-poppins font-medium">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <div className="flex gap-[44px] items-center">
            <button className="bg-[#f1a501] font-poppins text-white py-[16px] px-[22px] rounded-lg">Find out more</button>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary shadow-2xl"></div>
              <p className="font-poppins text-[#686D77]">Play Demo</p>
            </div>
          </div>
        </div>
        <img src={maa} alt="" />
      </div>
    </div>
  )
}

export default Banner