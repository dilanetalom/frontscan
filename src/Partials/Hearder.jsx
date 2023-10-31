import React, { useEffect, useState } from 'react'
import {  FaBarsStaggered } from 'react-icons/fa6'
import back from '../images/back.png'
import { Link, useNavigate } from 'react-router-dom';
import { getfirstuser, logout } from '../Service/Managment';
import { FaUser } from 'react-icons/fa6';
import Swal from "sweetalert2";



function Hearder() {
    const[usere, setUsere] = useState([])
    const navigate = useNavigate();
   
    useEffect(()=>{ 
        setUsere( JSON.parse(localStorage.getItem('users')));
        console.log(usere);
    },[])


    const upuser = async ()=>{
        navigate("/edituser", {
          state: {
            data: usere,
          },
        });
      }


    const Logout= async ()=>{
        Swal.fire({
            title: "Deconnexion du systeme",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Annuler",
            confirmButtonText: "Oui, Déconnecter!",
          }).then(async (result) => {
            if (result.isConfirmed) {
                await logout();
                localStorage.clear();
              Swal.fire("Déconnecter!", );
              navigate("/log")
            }
          });
            
    }
   
    return (
        
        <div className='w-full h-full  flex flex-row py-5 px-6 lg:justify-start  justify-between bg-[#5092CF]'>
            <div className='lg:w-[68%] w-[80%] h-full flex items-center lg:justify-start gap-10 justify-between '>
                <div className='lg:hidden flex gap-3 w-36 items-center'><FaBarsStaggered className='w-5 h-5'/><img src={back} alt=""className='w-5 h-5' /></div>
               
               {/* {
                window.location.pathname === "/home"? */}
                {/* <input type="text" className=' border-[1px]  rounded-[10px]  bg-blue-50 lg:w-2/3 w-full  py-2 focus:shadow-sm px-5 outline-none' placeholder='Search ...' /> */}
               {/*                 
                :null
               } */}  
                <Link to=""onClick={upuser} className='text-red-200 font-bold text-[18px] '>{usere.name}</Link>
            </div>
            <div className='flex flex-row gap-4 items-center  h-full'>
                <Link to="" onClick={Logout} className='text-white font-bold text-[14px]'>Déconnexion</Link>
                <div className='cursor-pointer'>
                  <FaUser size={23} className='text-red-200 '/>
                </div>
               
            </div>
        </div>
    )
}

export default Hearder