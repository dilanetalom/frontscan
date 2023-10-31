import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import back from '../images/back.png'

function Splashsreen() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            const token =  JSON.parse(localStorage.getItem('users'));
          if(token===null){
            navigate('/log')
          }else{
            navigate('/home')
          }
        }, 7000);
    })
    return (
        <div className='h-screen w-full bg-[#5092CF] flex items-center justify-center'>
            <div>
                <div className='flex gap-5 items-center justify-center'>
                    <h1 className='flex flex-col text-center lg:text-[3em] md:text-[2em] text-[1.5em] text-white font-bold'>
                        Chargement
                    </h1>
                    <Fade delay={1e3} cascade damping={1e-1} className='flex flex-col text-center lg:text-[3em] md:text-[2em] text-[1.5em] text-white font-semibold'>
                    ...
                    </Fade>
                </div>

                
            </div>
        </div>
    )
}

export default Splashsreen