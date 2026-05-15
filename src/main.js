import "./styles/style.css";
import { renderNavbar } from "./components/navbar.js";
import { renderHome } from "./pages/renderHome.js";
import { renderSearch } from "./pages/renderSearch.js";

renderNavbar();
// execute page-specific logic
const path = window.location.pathname;

if (path.includes("search.html")) {
  renderSearch();
} else if (path.includes("collections.html")) {
  renderCollections();
} else {
  // default: home page
  renderHome();
}

