
import axios from 'axios';
// import Swal from "sweetalert2";


const APP_URL = "http://192.168.100.6:8000/api/";

const MySwal = require('sweetalert2');
export async function addUser(data) {

  await axios.post(`${APP_URL}register`, data
  ).then((response) => {
    if (response.status === 200) {
      MySwal.fire({
        title: <strong>Nouveau utilisateur créé avec success</strong>,
        html: <i>Nouveau utilisateur créé avec success!</i>,
        icon: "success",
      });
    } else {
      MySwal.fire({
        title: <strong>Enregistrement Echoué</strong>,
        html: <i>Desolé verifier si vous avez remplir tous les champs !</i>,
        icon: "error",
      });
    }
  })
    .catch((errors) => {

    });
}


export async function edit(data) {
  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  }
  await axios.put(`${APP_URL}update/${data.id}`, data, config
  ).then((response) => {
    if (response.status === 200) {
      MySwal.fire({
        title: <strong>Modifier avec success</strong>,
        html: <i></i>,
        icon: "success",
      });
    } else {
      MySwal.fire({
        title: <strong>Modification Echoué</strong>,
        html: <i>Desolé verifier si vous avez remplir tous les champs !</i>,
        icon: "error",
      });
    }
  })
    .catch((errors) => {

    });
}


export  async function Logins (data) {

  await axios.post(`${APP_URL}login`, data
  ).then((response) => {
    if (response.status === 200) {
      
      localStorage.setItem('users', JSON.stringify(response.data.user));
      console.log(response.data.token);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('reponse', response.data.statut);
      return "true";
    } else {
      console.log("error");
      return 401;
    }
  })
    .catch((errors) => {
      // console.log(errors.response.data.message);
    });
}



export async function getUser() {
  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  }
  try {
    const data = await axios.get(`${APP_URL}users`, config);
    return data.data.data;
  } catch (error) {
  }

}


export async function getfirstuser(id) {
  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  }
  try {
    const data = await axios.get(`${APP_URL}user/${id}`, config);
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
  }

}

// const axios = require('axios');
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// const TOKEN = '<your-bearer-token>'; // Replace with your Bearer token
// // Set headers
// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${TOKEN}`
// };
// // Make GET request
// axios.get(`${BASE_URL}/todos/1`, { headers })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });



export async function logout() {

  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  const headers = {
    'Authorization': `Bearer ${tokens}`
  };

  try {
    const response = await axios.post(`${APP_URL}logout`, {}, { headers });
    if (response.data.statut === '200') {
      localStorage.clear();
     } 
  
  } catch (error) {
  }




}





export async function getpresence() {

  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  };

    try {
      const response = await axios.get(`${APP_URL}getpresence`, config);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de présence:', error);
      
      throw new Error('Une erreur s\'est produite lors de la récupération des données de présence.');
    }
 

}



export async function allpresence() {

  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  };

    try {
      const response = await axios.get(`${APP_URL}allpresence`, config);
      localStorage.setItem('alluser', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de présence:', error);
      
      throw new Error('Une erreur s\'est produite lors de la récupération des données de présence.');
    }
 

}




// export async function presencebyuser() {

//   const token = JSON.parse(localStorage.getItem('token'));
//   const tokens = token.token;
//   let config = {
//     headers: {
//       'Authorization': 'Bearer ' + tokens
//     }
//   };

//     try {
//       const response = await axios.get(`${APP_URL}user_presence`, config);
//       return response.data.data;
//     } catch (error) {
//       console.error('Erreur lors de la récupération des données de présence:', error);
      
//       throw new Error('Une erreur s\'est produite lors de la récupération des données de présence.');
//     }
 

// }



export async function show(id) {

  const token = JSON.parse(localStorage.getItem('token'));
  const tokens = token.token;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + tokens
    }
  };

    try {
      const response = await axios.get(`${APP_URL}show/${id}`, config);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de présence:', error);
      
      throw new Error('Une erreur s\'est produite lors de la récupération des données de présence.');
    }
 

}