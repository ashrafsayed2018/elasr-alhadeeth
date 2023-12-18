import Link from "next/link"
import { NavList } from "../constants"
import Image from "next/image"
function Navbar() {
  return (

    <header>
        <nav className="bg-white fixed sm:w-full z-20 top-0 left-0 right-0 border-b border-gray-200 dark:border-gray-600 ">
          <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
            <a className="logo" href="#">
              <h3 className="font-bold text-2xl">
                 <Image 
                    src="/logo.png" 
                    alt="logo"
                    width={100}
                    height={100} />
              </h3>
            </a>
            <input type="checkbox" id="check" />

            <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-sm">
              {NavList.map(nav => {
                      return  <li key={nav.id} className="mr-6">
                      <Link  href={nav.id == "1"? '/home' : `/categories/${nav.id}`}>{nav.label}</Link>
                      </li>
                  })}

              <label htmlFor="check" className="close-menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              </label>
            </span>

            <label htmlFor="check" className="open-menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </label>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar