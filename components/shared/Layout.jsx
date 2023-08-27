import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {

    return(


        <div className='bg-[#E8ECF4] min-h-screen '>

            <div>
                <Navbar/>
            </div>
            <div className='text-black'>
                {children}
            </div>
        </div>
    )

    
}

export default Layout