import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'
import menuSvg from '../../assets/svg_icons/menu.svg'

const Navbar = () => {
  return (
    <>
      <Headroom>
        <div className="max-w-screen-xl mx-auto">
          <div className="navbar bg-white">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl font-poppins">daisyUI</a>
            </div>
            <div className="flex-none ">
              <ul className='hidden md:flex gap-14 font-poppins'>
                <li><Link>Home</Link></li>
                <li><Link>Blogs</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Contact Us</Link></li>
              </ul>
              <label htmlFor="my-drawer" className='md:hidden cursor-pointer active:scale-95'><img className='h-10 w-10' src={menuSvg} alt="dd" /></label>
            </div>
          </div>
        </div>
      </Headroom>
      <div className="drawer block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-emerald-900 min-h-full">
            {/* drawer links */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar