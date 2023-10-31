import React, { useState } from 'react'

import back from '../images/berty.png'
import { Link, useNavigate } from 'react-router-dom'
import { Logins } from '../Service/Managment';
import { FaEye } from 'react-icons/fa6';

function Login() {
    const MySwal = require('sweetalert2');
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [change, setChange] = useState(true);
    const [user, setUser] = useState([]);
    const login = async (e) =>  {
        // localStorage.clear();
        e.preventDefault();
        const data =
        {
            email: email,
            password: password,      
        }
         
           const resp =  await Logins(data)
       console.log(resp);
        const infos =localStorage.getItem('reponse');
        setUser( JSON.parse(localStorage.getItem('user')));
        console.log(infos);
       
        if (infos === '200'  ) {
            navigate('/home');
        }
        else{
                    MySwal.fire({
                        title: "Désolé  ",
                        text: "vos informations sont incorrectes soit votre email ou votre mot de passe, vérifié ! ",
                        icon: 'error',
                        confirmButtonText: 'OK',
                   
                  });
                navigate("/log");
           
    
        }
       
       
    }
    return (
        <div className="flex items-center min-h-screen p-6 bg-[#5092CF] dark:bg-gray-900">
            <div
                className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
            >
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2 flex flex-col items-center justify-center md:gap-5  gap-2 ">
                        <h1 className='font-bold text-white lg:text-[2em] md:text-[1em]'>ManScan</h1>
                       <img src={back} alt="" className='md:w-96 w-36 md:h-60 '/>
                    </div>
                    <form className="flex items-center justify-center p-6 sm:p-12  md:w-1/2" onSubmit={login}>
                        <div className="w-full flex flex-col gap-3">
                            <h1
                                className="mb-4 text-xl font-semibold text-red-700 dark:text-gray-200"
                            >
                               Entrer vos informations de connexion
                            </h1>
                            <label className=" flex flex-col  gap-2 text-sm">
                                <span className="text-[#5092CF] dark:text-gray-400">Email</span>
                                <input
                                    className=" border-b border-[#5092CF] block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray "
                                    placeholder="Jane Doe"
                                    name="email"
                                    id='email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />

                            </label>
                            <label className="flex flex-col gap-2 mt-4 text-sm relative">
                                <span className="text-[#5092CF]dark:text-gray-400">Password</span>
                                <input
                                    className=" border-b border-[#5092CF] block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="***************"
                                    type={change?"password":"text"}
                                    name="password"
                                    id='password'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <FaEye className='absolute right-0 mt-8 cursor-pointer ' onClick={()=>{setChange(!change)}} color='#5092CF'/>
                            </label>
                          

                            {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                            <button
                            type='submit'
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#5092CF] border border-transparent rounded-lg active:bg-[#122E39] hover:bg-red-500 focus:outline-none focus:shadow-outline-purple"
                            >
                                Connexion
                            </button>

                            {/* <hr className="my-8" /> */}

                         

                            {/* <p className="mt-4">
                                <Link
                                    className="text-sm font-medium text-[#5092CF] dark:text-purple-400 hover:underline"
                                    to="./forgot-password.html"
                                >
                                    Forgot your password?
                                </Link>
                            </p> */}
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login