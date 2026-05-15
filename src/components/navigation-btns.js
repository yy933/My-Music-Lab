export function renderNavBtns() {
  document.querySelector(".navigation-btns").innerHTML =
    ` <button onclick="window.location.href = 'index'" class="btn-nav">
              Home
            </button>
            <button
              onclick="window.location.href = 'collections'"
              class="btn-nav"
            >
              My Collections
            </button>`;
}
