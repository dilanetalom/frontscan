
'use client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../../Partials/Layout';
import { FaEye } from 'react-icons/fa6';
import back from '../../images/back.png'
import { edit, show } from '../../Service/Managment';


function EditUser() {
    const location = useLocation();
    const [id, setId] = useState(location.state.data.id);
    const [nom, setNom] = useState(location.state.data.name);
    const [prenom, setPrenom] = useState(location.state.data.prenom);
    const [statut, setStatut] = useState(location.state.data.statut);
    const [telephone, setTelephone] = useState(location.state.data.telephone);
    const [email, setEmail] = useState(location.state.data.email);
    const [password, setPassword] = useState(location.state.data.password);
    const [change, setChange] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data =
        {
            id: id,
            name: nom,
            prenom: prenom,
            statut: statut,
            email: email,
            telephone: telephone,
            password: password,
        }
        await edit(data);
    }

    const presenceuser = async () => {
        const datas = await show(id);
        setData(datas)
        console.log(data);
    }

    useEffect(() => {
        presenceuser();
    }, [])



    // pagination

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPreviousPage = () => {
//       setCurrentPage(currentPage - 1);
//   };

//   const goToNextPage = () => {
//       setCurrentPage(currentPage + 1);
//   };


    return (
        <Layout>
            <div className=' w-full p-6 flex flex-col justify-center'>


                <div className='w-full h-full flex flex-col gap-3 pb-5  '>
                    <div className='w-full flex justify-between items-center bg-white shadow-2xl p-5'>
                        <div className='flex flex-row items-center gap-8 '>
                            <div className='w-24 h-24 bg-[#5092CF] rounded-full'>
                            </div>
                            <div className='text-[25px] font-semibold text-[#5092CF]  flex items-center   pb-10 '>
                                Informations Personelles
                            </div>

                        </div>
                        <button onClick={() => setOpenModal(!openModal)} className='px-8 py-3 w-1/4 border border-[#5092CF] rounded-lg hover:text-white hover:bg-[#5092CF] text-[#5092CF] font-semibold text-[16px]'>Modifier</button>
                    </div>
                    <div className='bg-white  shadow-2xl'>
                        <div className='w-full py-3 shadow-md px-5 flex flex-row '>
                            <div className='w-1/2 text-[20px] font-semibold text-[#5092CF]'> Nom     :</div>
                            <div className='w-1/2 text-[#5092CF] text-[20px] font-semibold'>{nom}</div>
                        </div>
                        <div className='w-full py-3 shadow-md px-5 flex flex-row'>
                            <div className='w-1/2 text-[20px] font-semibold text-[#5092CF]'> Prenom  :</div>
                            <div className='w-1/2 text-[#5092CF] text-[20px] font-semibold'>{prenom}</div>
                        </div>
                        <div className='w-full py-3 shadow-md px-5 flex flex-row'>
                            <div className='w-1/2 text-[20px] font-semibold text-[#5092CF]'> Email  :</div>
                            <div className='w-1/2 text-[#5092CF] text-[20px] font-semibold'>{email}</div>
                        </div>
                        <div className='w-full py-3 shadow-md px-5 flex flex-row'>
                            <div className='w-1/2 text-[20px] font-semibold text-[#5092CF]'> Téléphone  :</div>
                            <div className='w-1/2 text-[#5092CF] text-[20px] font-semibold'>{telephone}</div>
                        </div>
                        <div className='w-full py-3 shadow-md px-5 flex flex-row'>
                            <div className='w-1/2 text-[20px] font-semibold text-[#5092CF]'> Statut    :  </div>
                            <div className='w-1/2 text-[#5092CF] text-[20px] font-semibold'>{statut}</div>
                        </div>
                    </div>
                </div>

                {openModal ?
                    <div class="fixed inset-0 flex items-center w-full h-full backdrop-filter transition-blur duration-300 backdrop-blur-sm justify-center z-50">
                        <div class="bg-white rounded-lg shadow-lg p-6 w-1/2">
                            <h2 class="text-[2em] font-bold mb-4 text-[#5092CF]">Informations personnelles</h2>
                            <form className='pb-10 flex  flex-col gap-5 ' onSubmit={handleSubmit}>


                                <div className='flex flex-row gap-5'>
                                    <div class="mb-6 w-1/2">
                                        <label for="nom" class="block mb-2 text-sm font-medium text-white dark:text-white">Nom *</label>
                                        <input type="text" id="nom" name='nom'
                                            value={nom}
                                            onChange={(e) => setNom(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : Talom" required />
                                    </div>
                                    <div class="mb-6 w-1/2">
                                        <label for="prenom" class="block mb-2 text-sm font-medium text-white dark:text-white">Prenom *</label>
                                        <input type="text" id="prenom" name='prenom'
                                            value={prenom}
                                            onChange={(e) => setPrenom(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : Dilane" required />
                                    </div>
                                </div>

                                <div className='flex flex-row gap-5'>
                                    <div class="mb-6 w-1/2">
                                        <label for="statut" class="block mb-2 text-sm font-medium text-white dark:text-white">Statut *</label>
                                        <select name="statut" id="statut"
                                            value={statut}
                                            onChange={(e) => setStatut(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                            <option value="">votre statut</option>
                                            <option value="utilisateur">utilisateur</option>
                                            <option value="admin">admin</option>
                                        </select>
                                    </div>
                                    <div class="mb-6 w-1/2">
                                        <label for="telephone" class="block mb-2 text-sm font-medium text-white dark:text-white">Téléphone *</label>
                                        <input type="number" id="telephone" name='telephone'
                                            value={telephone}
                                            onChange={(e) => setTelephone(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder='exemple : 155622' />
                                    </div>
                                </div>

                                <div className='flex flex-row gap-5'>
                                    <div class="mb-6 w-1/2">
                                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email *</label>
                                        <input type="email" id="email" name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : dilanetalom8@gmail.com" required />
                                    </div>
                                    <div class="mb-6 w-1/2">
                                        <label for="password" class="block mb-2 text-sm font-medium text-white  dark:text-white">password *</label>
                                        <input
                                            type={change ? "password" : "text"}
                                            id="password" name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            class="shadow-sm border border-[#5092CF] outline-none text-gray-900 text-sm rounded-lg text-[#5092CF]  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                        <FaEye className='absolute right-[410px] top-[62%] cursor-pointer text-[#5092CF] ' onClick={() => { setChange(!change) }} />
                                    </div>
                                </div>




                                <div className='flex flex-row gap-5'>
                                    <div class="mb-6 w-1/2">
                                        <button type="button" onClick={() => setOpenModal(false)} class=" w-full text-white bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Annuler</button>
                                    </div>
                                    <div class="mb-6 w-1/2">
                                        <button type="submit" class=" w-full text-white bg-[#5092CF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                                    </div>
                                </div>

                            </form>
                            {/* <div class="flex justify-end">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Close
                            </button>
                        </div> */}
                        </div>
                    </div> : null


                }



                <div className='text-[35px] font-semibold text-[#5092CF] text-center pb-10 pt-10 underline'>Historique Horaire</div>

                <div className='grid grid-cols-4 gap-5 w-full '>
                    {
                        data && data.length ?
                        data.map((item, index) => {
                                return (
                                    <div className='border border-[#5092CF] h-28 rounded-lg shadow-2xl p-2 flex flex-col' key={index}>
                                          <div className='flex flex-row justify-between'>
                                               <div className=' flex justify-start'>
                                                  <img src={back} className='w-16 h-10' alt="" />
                                               </div>
                                               <div className='flex flex-col justify-end'>
                                                     <span className='text-end'>Date </span>
                                                     <span className='font-[600]'>{item.datejour}</span>
                                               </div>
                                          </div>
                                          <div  className='flex flex-row justify-between'>
                                          <div className='flex flex-col justify-start'>
                                                     <span >Date </span>
                                                     <span className='font-[600]'>{item.heurearrive}</span>
                                               </div>
                                          <div className='flex flex-col justify-end'>
                                                     <span className='text-end'>Date </span>
                                                     <span className='font-[600]'>{item.heuredepart}</span>
                                               </div>
                                          </div>
                                    </div>
                                )
                            }):
                            <div className='w-full flex items-center justify-center text-center text-red-500 text-[1em]'>
                                 Aucun enregistrement ...
                            </div>
                    }


                </div>
                      {/* {
                        data.length>0? */}
                        <div className='w-full flex justify-end py-3'>
                        <div className='w-1/4 bg-red-500 flex flex-row'>
                             <div className='w-1/2 bg-red-500 rounded-l-xl p-3 cursor-pointer hover:bg-red-600 flex items-center justify-center text-center font-[600] text-white'>Précédent</div>
                             <div className='w-1/2 bg-blue-500 cursor-pointer flex items-center hover:bg-blue-600  justify-center text-center font-[600] text-white'>Suivant</div>
                        </div>
                     </div>
                      {/* } */}
            </div>
        </Layout>

    )
}

export default EditUser