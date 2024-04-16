import Heading from "../Heading/Heading"
import ServiceCard from "./ServiceCard"

const Service = () => {
  return (
    <div>
      <Heading heading="We Offer Best Services" title="Category" />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-[55px] px-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}

export default Service