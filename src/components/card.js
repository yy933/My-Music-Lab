export function renderCard(data) {
  const cardsContainer = document.querySelector(".music-grid");
  if (!cardsContainer) return;
  if (!data || data.length === 0) {
    cardsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h2>Oops! No results found.</h2>
        <p>Please try searching for another track or artist.</p>
        <button onclick="window.location.href='index.html'" class="btn-back">Back to Home</button>
      </div>
    `;
    return;
  }
  const cardsHtml = data
    .map((item) => {
      // get image url
      const rawImg = item?.image[2]?.["#text"];
      const isDefault = rawImg.includes("2a96cbd8b46e442fc41c2b86b821562f");
      const imageUrl = isDefault
        ? `https://placehold.co/600x400/A0522D/white/?text=${encodeURIComponent(item.name)}&font=Oswald`
        : rawImg;
      const artistName = item.artist?.name || "Unknown Artist";
      const artistUrl = item.artist?.url || "#";
      return `
    <div class="music-card">
  <img
    src="${imageUrl}"
    alt="${item.name}"
    class="card-img"
  />

  <div class="card-info">
    <a href=${item.url} target="_blank">
      <h3 class="track-name">${item.name}</h3>
    </a>
    <a href="${artistUrl}" target="_blank">
      <span class="artist-name">${artistName}</span>
    </a>
  </div>

  <div class="card-action">
    <button class="btn-fav" data-name="${item.name}" data-artist="${artistName}">
      <svg class="icon-heart" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  </div>
</div>`;
    })
    .join("");

  if (cardsContainer) {
    cardsContainer.innerHTML = cardsHtml;
  }
}
