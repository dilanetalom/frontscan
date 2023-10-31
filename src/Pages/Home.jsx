import React from 'react'
import Layout from '../Partials/Layout'
import { useEffect } from 'react';
import { useState } from 'react';
import {  getpresence } from '../Service/Managment';

function Home() {
    const [data, setData] = useState([]);
    const[user, setUser] = useState([])
    const[users, setUsers] = useState([])

    const upuser = async () => {    
        try {          
             const datas = await getpresence();  
             setUsers(datas.user);    
             setData(datas.data);  
           
        } catch (error) {
            
        }
    
    }

    

    useEffect( ()=> {
      setUser( JSON.parse(localStorage.getItem('users'))); 
        upuser();      
    },[])

    
    return (
        <Layout>
            <div className='flex flex-col gap-5'>
                <p className='text-[#5092CF]  text-[1.2em] font-semibold text-center py-3'>🙂 Bonjour {user.name} nous vous souhaitons la bienvenue </p>
               
                <div className='text-white w-full p-10'>
                    <table className='w-full border-2' >
                        <th className='w-full bg-[#5092CF]  p-5 flex justify-between'>
                            <td className='w-1/4 text-left'>Nom</td>
                            <td className='w-1/4 text-left'>Heure d'arrivée</td>
                            <td className='w-1/4 text-left'>Heure de Départ</td>
                            <td className='w-1/4 text-left'>Date du jour</td>
                        </th>
                        <body >
                           {
                            data && data.length?
                                data.map((item, index) => {

                                    return (
                                        <tr className='w-full p-5 flex justify-between text-[#5092CF] border-b-2'>
                                            <td className='w-1/4 text-left'>{users[index][0].name}</td>
                                            <td className='w-1/4 text-left'>{item.heurearrive}</td>
                                            <td className='w-1/4 text-left'>{item.heuredepart}</td>
                                            <td className='w-1/4 text-left'>{item.datejour}</td>

                                        </tr>
                                    )
                                }):
                            
                                <div className='text-center py-5 text-red-500'>
                                    Personne n est encore arrivé . . .
                                </div>

                            }


                        </body>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Home