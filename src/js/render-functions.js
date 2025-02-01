// функції для відображення елементів інтерфейсу

export const createGalleryCardTemplate = imgInfo => {
    return`
       
            <li class='gallery-card'>
                <a class='gallery-link' href='${imgInfo.largeImageURL}'>
                    <img class='gallery-img' src='${imgInfo.webformatURL}' alt='${imgInfo.tags}' />
                    <div class='img-card'>
                        <span class='span-text'>Likes <span class='span-number'>${imgInfo.likes}</span></span>
                        <span class='span-text'>Views <span class='span-number'>${imgInfo.views}</span></span>
                        <span class='span-text'>Comments <span class='span-number'>${imgInfo.comments}</span></span>
                        <span class='span-text'>Downloads <span class='span-number'>${imgInfo.downloads}</span></span>
                    </div>
                </a>
            </li>`;
};