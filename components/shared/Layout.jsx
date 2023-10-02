import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from '@/pages'
function Layout ({ children }) {
  const [searchNav, setSearchNav] = useState('')

  const childComponent = React.Children.toArray(children).find(
    child => child.type === Home
  )

  return (
    <div className='bg-[#E8ECF4] min-h-screen '>
      <div>
        <Navbar searchNav={searchNav} setSearchNav={setSearchNav} />
      </div>
      <div className='text-black'>
        {/* {React.cloneElement(children, { searchNav: searchNav, setSearchNav:setSearchNav})} */}
        {/* {children} */}
        {React.Children.map(children, child => {
          // If the child is of type ChildComponent, pass the searchNav prop
          if (child.type === Home) {
            return React.cloneElement(child, { searchNav: searchNav,setSearchNav:setSearchNav })
          }
          return child
        })}
      </div>
    </div>
  )
}

export default Layout
