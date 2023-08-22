import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {

    return(


        <div>

            <div>
                <Navbar/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )

    
}

export default Layout