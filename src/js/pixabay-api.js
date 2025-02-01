// функції для HTTP-запитів

import axios from 'axios';

export const fetchPhotosByQuery = searchedQuery => {

    const searchParams = new URLSearchParams({
        key: '48454112-2bb14e2eb4c862c9f6d932a5d',
        q: `${searchedQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '15'
    });

    // return fetch(
    //     `https://pixabay.com/api/?${searchParams}`).then(response => {
    //     if (!response.ok) {
    //          throw new Error(responce.status);
    //     } 
    //     return response.json();
    // })

    // return axios.get('https://pixabay.com/api/', {
    //     params: {
    //         key: '48454112-2bb14e2eb4c862c9f6d932a5d',
    //         q: searchedQuery,
    //         image_type: 'photo',
    //         orientation: 'horizontal',
    //         safesearch: 'true',
    //         per_page: '15'
    //     }
    // });
    
    return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
