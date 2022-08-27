// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

//console.log(galleryItems);
/*
const galleryEl = document.querySelector('.gallery');

const listGalleryEl = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
            <img 
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>
    `
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', listGalleryEl);

let lightBox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: '250',
});

*/

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

//var1 якщо елемент пустий, або переписується наново весь
//galleryContainer.innerHTML = galleryItemsMarkup;
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup); // додали в розмітку

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
  <a class=class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
  overlayOpacity: '0.6',
});
