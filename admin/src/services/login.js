import {api} from '../api'

export async function login({username, password}){
  try{
    const response = await api.post('/login',{
      email: username,
      password
    })
    return response.data.accessToken
  }catch(e){
    console.error(e)
  }

}
