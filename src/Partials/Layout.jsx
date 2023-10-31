import React from 'react'
import Hearder from '../Partials/Hearder'
import Sidebar from '../Partials/Sidebar'
function Layout({ children }) {
    return (
        <div className='h-screen w-full flex flex-row'>
            <div className='w-[18%] h-full bg-[#5092CF] fixed hidden lg:flex shadow-md p-5 '>
                <Sidebar />
            </div>
            <div className='w-[18%] h-full hidden lg:flex'>
            </div>
            <div class="lg:w-[82%] w-full h-full relative">
                <div className='w-full lg:h-[12%] h-[10%] bg-white fixed shadow-sm bg-yellow-50'>
                    <Hearder />
                </div>
                <div className='w-full lg:h-[12%] h-[10%] '>
                </div>
                <div class="w-full h-screen ">
                    {children}
                </div>
                <div className='w-full h-14 bg-[#5092CF] fixed hidden lg:flex shadow-md p-5 '>
                    fdfd
                </div>
            </div>
        </div>
    )
}

export default Layout