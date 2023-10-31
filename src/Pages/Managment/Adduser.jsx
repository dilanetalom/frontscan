import React, { useState } from 'react'
import Layout from '../../Partials/Layout'
import { addUser } from '../../Service/Managment';
import { FaEye } from 'react-icons/fa6'

function Adduser() {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [statut, setStatut] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [change, setChange] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data =
        {
            name: nom,
            prenom: prenom,
            statut: statut,
            email: email,
            telephone: telephone,
            password: password,
        }
        await addUser(data);
       
    }

    return (
        <Layout>
            <div className=' w-full p-6 '>
                <form className='pb-10 flex  flex-col gap-5' onSubmit={handleSubmit}>
                 

                    <div className='flex flex-row gap-5'>
                        <div class="mb-6 w-1/2">
                            <label for="nom" class="block mb-2 text-sm font-medium text-white dark:text-white">Nom *</label>
                            <input type="text" id="nom" name='nom'
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : Talom" required />
                        </div>
                        <div class="mb-6 w-1/2">
                            <label for="prenom" class="block mb-2 text-sm font-medium text-white dark:text-white">Prenom *</label>
                            <input type="text" id="prenom" name='prenom'
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : Dilane" required />
                        </div>
                    </div>
               
                    <div className='flex flex-row gap-5'>
                        <div class="mb-6 w-1/2">
                            <label for="statut" class="block mb-2 text-sm font-medium text-white dark:text-white">Statut *</label>
                            <select name="statut" id="statut"
                                value={statut}
                                onChange={(e) => setStatut(e.target.value)}
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
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
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder='exemple : 155622' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <div class="mb-6 w-1/2">
                            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email *</label>
                            <input type="email" id="email" name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="exemple : dilanetalom8@gmail.com" required />
                        </div>
                        <div class="mb-6 w-1/2">
                            <label for="password" class="block mb-2 text-sm font-medium text-white  dark:text-white">password *</label>
                            <input 
                             type={change?"password":"text"}
                             id="password" name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='***********'
                                class="shadow-sm outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
                                 <FaEye className='absolute right-10 top-[57%] cursor-pointer ' onClick={()=>{setChange(!change)}} color='#5092CF'/>
                        </div>
                    </div>

                


                    <div class="mb-6 w-full">
                        <button type="submit" class=" w-full hover:text-white text-[#5092CF]  border border-[#5092CF]  hover:bg-[#5092CF]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregistrer</button>
                    </div>

                </form>

            </div>
        </Layout>
    )
}

export default Adduser