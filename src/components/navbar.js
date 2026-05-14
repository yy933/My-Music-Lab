export function renderNavbar() {
  document.querySelector("header").innerHTML = `
  <img
        class="header-img"
        src="/images/header image.jpg"
        alt="header image"
      />

      <div class="header-content">
        <h1>My Music Lab</h1>
        <div class="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Search tracks or artists..."
          />
        </div>
      </div>`;
}
