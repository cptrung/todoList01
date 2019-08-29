import axios from 'axios';

const url = 'http://5d3ea855139f4200145328c1.mockapi.io/api/login/';
//get all user
export function fetchAllUser(){
  return axios({
    method: "GET",
    url
  });
}
// get user by id
export function fetchUserByID(id){
  return axios({
    method: "GET",
    url:`${url}/${id}`
  });
}

