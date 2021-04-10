import axios from 'axios';

/*--- NOTE this service is a function that returns an object ---*/
// const api = () => {}
// returned object exposes methods for api petitions, for instance:
// {
//     fetchUserNews: async (values) => await axios.get(values)
// } 
const api = ( API_BASE_URL = 'https://newsapi.org/v2/everything', API_KEY = '3816a8e8e5be4855acb47ecac262aaf5' ) => {
    return {
        fetchUserNews: async (userSearchString) => {
            const API_ENDPOINT = `${API_BASE_URL}?q=${userSearchString}&apiKey=${API_KEY}`;

            try {
                const response = await axios.get(API_ENDPOINT);
                return response.data;
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default api;