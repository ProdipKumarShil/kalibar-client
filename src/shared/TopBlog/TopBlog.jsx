import Heading from "../Heading/Heading"
import TopBlogCard from "./TopBlogCard"

const TopBlog = () => {
  return (
    <div>
      <Heading title="our blogs" heading="Explore Top Blogs" />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-[55px] px-4">
        <TopBlogCard />
        <TopBlogCard />
        <TopBlogCard />
      </div>
    </div>
  )
}

export default TopBlog