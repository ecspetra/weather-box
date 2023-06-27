import { API_URL } from "../apiConstants/apiConstants";

export const fetchDataFromAPI = async (src: string) => {
    const linkToFetch = API_URL.replace('query', src);
    console.log(linkToFetch)

    try {
        const response = await fetch(linkToFetch);
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};
