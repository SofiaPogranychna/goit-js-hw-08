import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");


const markup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`).join("");

gallery.insertAdjacentHTML("beforeend", markup);

const galleryLargeSize = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
    captionDelay: 250,
  showCounter: false
});

