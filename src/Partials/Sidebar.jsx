import React from 'react'
import back from '../images/bertyc.png'
import { Link } from 'react-router-dom'

function Sidebar() {
    const lien = [
        {
            id: 1,
            liens: "Tableau de Bord",
            path: "/home"
        },
        {
            id: 2,
            liens: "Présences",
            path: "/recherche"
        },
        {
            id: 3,
            liens: "Ajouter Personnes",
            path:"/adduser"
        },
        {
            id: 4,
            liens: "listes Personnes",
            path:"/getuser"
        },
    ]
    return (
        <div className='flex flex-col w-full h-full gap-10  '>
            <div className='h-[15%] w-full  flex flex-col   font-bold text-white text-[1.2em] items-center'>
                <img src={back} alt="" className='w-36 h-36' />
                <div className=''>
                    <span className='text-white w-full'> ManScan</span>
                </div>
            </div>
            <div className='w-full h-[85%] flex flex-col gap-3'>
                {
                    lien.map((item) => {
                        return (
                            <Link
                            key={item.id}
                            to={item.path}
                             className={`hover:bg-white focus:bg-white focus:text-[#5092CF] p-3  hover:text-[#5092CF] rounded-md font-[500] cursor-pointer border border-green-100 ${
                                window.location.pathname === item.path ? 'bg-white text-[#5092CF]' : 'text-white'}`}>
                                {
                                    item.liens
                                }
                            </Link>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Sidebar