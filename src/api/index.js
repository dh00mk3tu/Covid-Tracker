import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// get requests 
const fetchData = async() => {
    try {
        const response = await axios.get(url);
        
        // Test Code
        console.log(response);
    }
    catch (error) {

    }
}