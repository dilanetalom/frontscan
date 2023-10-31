import React, { useEffect, useState } from 'react'
import Layout from '../Partials/Layout'
import { allpresence } from '../Service/Managment';
import { FaSearchengin } from 'react-icons/fa6';

function Search() {
    const [data, setData] = useState([]);
    const[user, setUser] = useState([])
    const[users, setUsers] = useState([])

    
    const upuser = async () => {    
        try {          
             const datas = await allpresence();  
             setUsers(datas.user);    
             setData(datas.data);  
           
        } catch (error) {
            
        }
    
    }

    

    useEffect( ()=> {
      setUser( JSON.parse(localStorage.getItem('alluser'))); 
        upuser();      
    },[])



    // pagination

    const [currentPage, setCurrentPage] = useState(1);
    const [currentUser, setCurrentUser] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const currentuse = users.slice(indexOfFirstItem, indexOfLastItem);

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
        setCurrentUser(currentUser - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
        setCurrentUser(currentUser + 1);
    };

// recherche

const [searchTerm, setSearchTerm] = useState('');


const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.datejour.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchs = ()=>{
    setData(filteredData);
  }

    return (
        <Layout>
           <div className='flex flex-col '>
                    <div className='p-10 flex flex-row justify-center'>
                        <p className='text-[#5092CF] text-[2em] font-bold underline'>Toutes les Présences </p>             
                    </div>
                    <div className='text-white w-full pb-10 px-10' >
                        <div className='text-black w-1/2  h-[70px] pb-5 flex relative   items-center '>
                            <input type="text"
                              onChange={handleSearchChange}
                              value={searchTerm}
                            className='w-[100%] h-[100%] border-2 border-[#5092CF] rounded-md px-3 outline-none ' placeholder='recherche par date' />
                            <div className=' h-[100%] flex items-center cursor-pointer '>
                               <FaSearchengin onClick={searchs} size={25} className='absolute right-3 text-[#5092CF]'/>
                            </div>
                            {/* <button  className='w-[40%] h-full bg-red-500 text-white font-[600] hover:bg-red-600 rounded-r-md'>Recherche</button> */}
                        </div>
                    
                          <table className='w-full border-2' >
                              <th className='w-full bg-[#5092CF] p-5 flex justify-between'>
                                  <td className='w-1/4 text-left'>Nom</td>
                                  <td className='w-1/4 text-left'>heure d'arrivée</td>
                                  <td className='w-1/4 text-left'>heure de depart</td>
                                  <td className='w-1/4 text-left'>Date</td>
                                  {/* <td className='w-1/7   text-left'>Action</td> */}
                              </th>
                              <body >
                              {
                            currentItems && currentItems.length?
                            currentItems.map((item, index) => {

                                    return (
                                        <tr className='w-full p-5 flex justify-between text-[#5092CF] border-b-2'key={index}>
                                            <td className='w-1/4 text-left'>
                                                {currentuse[index][0].name}
                                                </td>
                                            <td className='w-1/4 text-left'>{item.heurearrive}</td>
                                            <td className='w-1/4 text-left'>{item.heuredepart}</td>
                                            <td className='w-1/4 text-left'>{item.datejour}</td>

                                        </tr>
                                    )
                                })
                            
                                :
                                    <div className='text-center py-5 text-yellow-500 '>Chargement des données ...</div>
                                  
                              }
                              </body>
                          </table>

                          <div className='w-full flex justify-end py-3'>
                               <div className='w-1/4 bg-red-500 flex flex-row'>
                                    <div className='w-1/2 bg-red-500 rounded-l-xl p-3 cursor-pointer hover:bg-red-600 flex items-center justify-center text-center font-[600]' onClick={goToPreviousPage}>Précédent</div>
                                    <div className='w-1/2 bg-blue-500 cursor-pointer flex items-center hover:bg-blue-600  justify-center text-center font-[600]' onClick={goToNextPage}>Suivant</div>
                               </div>
                          </div>
                    </div>
                </div>
        </Layout>
    )
}

export default Search