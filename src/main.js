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
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;

let searchedQuery = '';

const onSearchFormSubmit = async event => {
    try {
        event.preventDefault();

        searchedQuery = event.currentTarget.elements.text_q.value.trim();
        
        if (searchedQuery === '') {
            iziToast.warning({
                title: 'Caution',
                message: 'Please, enter valid search requirements!',
            });

            return;
        }

        page = 1;

        loadMoreBtn.classList.add('is-hidden');

        loader.style.display = 'block';
        galleryEl.innerHTML = '';

        const { data } = await fetchPhotosByQuery(searchedQuery, page);

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            galleryEl.innerHTML = '';
            searchFormEl.reset();

            loader.style.display = 'none';

            return;
        }

        if (data.totalHits > 15) {
            loadMoreBtn.classList.remove('is-hidden');
            loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
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

const onLoadMoreBtnClick = async event => {
    try {
        page++;

        const { data } = await fetchPhotosByQuery(searchedQuery, page);

        const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

        galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

        if (page * 15 >= data.totalHits) {
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results.",
            });
            loadMoreBtn.classList.add('is-hidden');
            loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
        }

    } catch (err) {
        console.log(err);
    }
};
