import "./styles/style.css";
import { renderNavbar } from "./components/navbar.js";
import { renderHome } from "./pages/renderHome.js";
import { renderSearch } from "./pages/renderSearch.js";
import { renderCollections } from './pages/renderCollections.js';
import { storage } from "./utils/storage.js";

const trackList = document.querySelector(".music-grid");

renderNavbar();
// execute page-specific logic
const path = window.location.pathname;


if (path.includes("search.")) {
  renderSearch();
} else if (path.includes("collections")) {
  renderCollections();
} else {
  // default: home page
  renderHome();
}

// listen for tracklist
trackList.addEventListener("click", (e) => {
  const favBtn = e.target.closest(".btn-fav");
  if (!favBtn) return;

  // get data from dataset(data-*)
  const trackData = {
    name: favBtn.dataset.name,
    artist: { name: favBtn.dataset.artist },
    image: [
      { "#text": "" }, // placeholder: index 0
      { "#text": "" }, // placeholder: index 1
      { "#text": favBtn.dataset.image }, // actual image url: index 2
    ],
    url: favBtn.dataset.url,
  };
  if (storage.isFavorite(trackData.name, trackData.artist.name)) {
    storage.remove(trackData.name, trackData.artist.name);
    favBtn.classList.remove("active");
  } else {
    storage.add(trackData);
    favBtn.classList.add("active"); 
  }
});
