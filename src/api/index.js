import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// get requests 
export const fetchData = async() => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

        // console.log(response);
    }
    catch (error) {

    }
}

export const fetchDailyData = async => {
    try {
        const response = await axnios.get(`${url}/daily`);
    }
    catch (error) {

    }
}