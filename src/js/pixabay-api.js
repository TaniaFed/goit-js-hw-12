// функції для HTTP-запитів

import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
    const axiosOptions = {
        params: {
            key: '48454112-2bb14e2eb4c862c9f6d932a5d',
            q: searchedQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: '15',
            page: currentPage
        },
    };
    return axios.get(`https://pixabay.com/api/`, axiosOptions);
};

