// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// вся логікa роботи додаткa

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');


const onSearchFormSubmit = async event => {
    try {
        event.preventDefault();

        const searchedQuery = event.currentTarget.elements.text_q.value.trim();
        
        if (searchedQuery === '') {
            iziToast.warning({
                title: 'Caution',
                message: 'Please, enter valid search requirements!',
            });

            return;
        }

        loader.style.display = 'block';
        galleryEl.innerHTML = '';

        const { data } = await fetchPhotosByQuery(searchedQuery);

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            galleryEl.innerHTML = '';
            searchFormEl.reset();

            return;
        }

        const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
        galleryEl.innerHTML = galleryTemplate;

        const lightbox = new SimpleLightbox('.gallery-card a.gallery-link  ', {
            // captionsData: 'alt',
            // captionDelay: 250,
        });
        console.log(lightbox);

    } catch (err) {
        if (galleryEl.innerHTML === '') {
            console.err('Error fetching data:', err);
            iziToast.err({
                title: 'Error',
                message: 'An error occurred while searching for images',
            });
        }

    }
    loader.style.display = 'none';
};



searchFormEl.addEventListener('submit', onSearchFormSubmit);