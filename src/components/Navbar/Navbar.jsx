import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <>
      <Headroom>
        <div className="navbar bg-white">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none ">
            <label htmlFor="my-drawer" className='btn bg-primary drawer-button md:hidden'>Open Drawer</label>
          </div>
        </div>
      </Headroom>
      <div className="drawer block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-emerald-900 min-h-full">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar