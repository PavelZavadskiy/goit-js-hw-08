// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');

// create via innerHTML
const items = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>
      </li>`
  )
  .join('');
gallery.innerHTML = items;

const option = {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
};

new SimpleLightbox('.gallery a', option);

console.log(galleryItems);
