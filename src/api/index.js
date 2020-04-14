import {get} from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let fetchUrl = url;
    if(country){
        fetchUrl = `${url}/countries/${country}`
    }
    try{
        const {data: {confirmed, deaths, recovered, lastUpdate}} =  await get(fetchUrl);
        console.log('called', confirmed);
            return {
                confirmed,
                deaths,
                recovered,
                lastUpdate,
            };

    }catch(error){
        console.log(error);
        return error;
    }
}

export const fetchDaily = async () => {
    try{
        const {data} = await get(`${url}/daily`);
        console.log(data);
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    }catch(error){
        console.log(error);
        return error;
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await get(`${url}/countries`);
         return countries.map(country => country.name);
    }catch(error){
        console.log(error);
        return error;
    }
    
}