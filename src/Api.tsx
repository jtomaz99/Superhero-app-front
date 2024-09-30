import axios from "axios";
const URL = '/api'

export async function getLeaguesbyCountryName(country:string) {
    try{
        const response = await axios
        .get(`${URL}leagues`, {
            params: { country },
            headers: {
                'X-RapidAPI-Key': '3ab9875dacmsh7478e70ae238f86p137e9bjsnfa0f396c7bb1',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
              }   
        })
    }
    catch (error){
        return error
    }
}

export async function getUserInfo() {
    try{
        const response = await axios.get(`${URL}/users`)
        return response;
    }
    catch (error){
        return error
    }
}

export async function getAllHeroes() {
    try{
        const response = await axios.get(`${URL}/SuperHero`)
        axios.defaults.withCredentials = true;

        return response;
    }
    catch (error){
        return error
    }
}

export async function deleteHero(id:number) {
    try{
        const response = await axios.delete(`${URL}/SuperHero/Delete/${id}`)

        return response;
    }
    catch (error){
        return error
    }
}