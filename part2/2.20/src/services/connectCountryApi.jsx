import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  return axios.get(baseUrl+'/all')
}

const getOne = async (nameOfCountry) => {
  const url = `${baseUrl}/name/${nameOfCountry}`;
  // const temp = axios.get(url).then(response => {
  //   console.log(response.data);
  //   return response.data;
  // });
  console.log(url)
  const request = axios.get(url)
  return request.then(data => data.data)
}

export default {
  getAll: getAll,
  getOne: getOne
}