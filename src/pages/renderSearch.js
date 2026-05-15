import { renderCard } from "../components/card";
import { searchTracks } from "../api/lastfmApi";

export async function renderSearch() {
  // get query from url
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");

  if (!query) return;

  // show 'searching...' in UI
  const container = document.querySelector(".music-grid");
  if (container) container.innerHTML = "<p>Searching...</p>";

  try {
    // call API
    const results = await searchTracks(query);
    // render search results in cards
    renderCard(results);
  } catch (error) {
    // if API call fails, show error message
    container.innerHTML = `
      <div class="empty-state">
        <h2>Service Unavailable</h2>
        <p>Something went wrong with the music lab. Please try again later.</p>
      </div>
    `;
    console.error("API call error: ", error);
  }
}
