import axios from 'axios';

export async function getData() {
   axios.get('/user')
      .then(response => {
         console.log(response);
      });
};