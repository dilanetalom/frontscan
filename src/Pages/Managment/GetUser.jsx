import React, { useEffect } from 'react'
import Layout from '../../Partials/Layout'
import Swal from "sweetalert2";
import { FaPen,FaDeleteLeft } from 'react-icons/fa6'
import { getUser, getfirstuser } from '../../Service/Managment';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GetUser() {
  const[data, setData] = useState([]);
  const navigate = useNavigate();
  function deletepro(){
    Swal.fire({
        title: "Voulez vous Supprimez cet utilisateur?",
        text: "cette action est irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Annuler",
        confirmButtonText: "Oui, Supprimer!",
      }).then((result) => {
        if (result.isConfirmed) {
            // deleteProduct(id);
          Swal.fire("Supprimer!", "Utilisateur supprimer avec succès.", "success");
        }
      });
    
  }

const  getuser = async ()=>{
  const datas = await getUser();
  setData(datas);
}


useEffect(()=>{
  getuser();
},[])

const upuser = async (id)=>{
  const data = await getfirstuser(id);
  navigate("/edituser", {
    state: {
      data: data,
    },
  });
}


  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const goToPreviousPage = () => {
      setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
      setCurrentPage(currentPage + 1);
  };

  return (
    <Layout>
                <div className='flex flex-col '>
                    <div className='p-10 flex flex-row justify-between'>
                        <p className='text-[#5092CF] text-[1.5em] font-bold'> Utilisateurs Disponibles </p>
                        <Link to="/adduser" className='text-[#5092CF] w-14 h-14 p-2 flex justify-center items-center border-2 hover:bg-[#5092CF] hover:text-white border-[#5092CF] cursor-pointer text-[2em] font-bold rounded-md'> +</Link>
                    </div>
                    <div className='text-white w-full p-10'>
                          <table className='w-full border-2' >
                              <th className='w-full bg-[#5092CF] p-5 flex justify-between'>
                                  <td className='w-1/6 text-left'>Nom</td>
                                  <td className='w-1/6 text-left'>Prenom</td>
                                  <td className='w-1/6 text-left'>Email</td>
                                  <td className='w-1/6 text-left'>Telephone</td>
                                  <td className='w-1/6 text-left'>Statut</td>
                                  <td className='w-1/7   text-left'>Action</td>
                              </th>
                              <body >
                              {
                                data && data.length?
                                
                                currentItems.map((item)=>{
                                    return(
                                      <tr className='w-full p-5 flex text-[#5092CF] border-b-2'>
                                    <td className='w-1/6 text-left'>{item.name}</td>
                                    <td className='w-1/6 text-left'>{item.prenom}</td>
                                    <td className='w-1/6 text-left'>{item.email}</td>
                                    <td className='w-1/6 text-right'>{item.telephone}</td>
                                    <td className='w-1/6 text-right'>{item.statut}</td>
                                    <td className='flex gap-3 w-1/6 justify-end'>
                                        <FaPen className='cursor-pointer' onClick={() => upuser(item.id)}/>
                                        <FaDeleteLeft className='cursor-pointer' onClick={deletepro}/>
                                    </td>
                                </tr>
                                    )
                                  } 
                                  )
                                :
                                    <div className='text-center py-5 text-yellow-500 '>Chargement des données ...</div>
                                  
                              }
                              </body>
                          </table>

                          <div className='w-full flex justify-end py-3'>
                               <div className='w-1/4 bg-red-500 flex flex-row'>
                                    <div onClick={goToPreviousPage} className='w-1/2 bg-red-500 rounded-l-xl p-3 cursor-pointer hover:bg-red-600 flex items-center justify-center text-center font-[600]'>Précédent</div>
                                    <div onClick={goToNextPage} className='w-1/2 bg-blue-500 cursor-pointer flex items-center hover:bg-blue-600  justify-center text-center font-[600]'>Suivant</div>
                               </div>
                          </div>
                    </div>
                </div>
        </Layout>
  )
}

export default GetUser