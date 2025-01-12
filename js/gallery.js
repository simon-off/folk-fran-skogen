import lineUps from "./line-ups.js";
import { observe } from "./scroll.js";

const galleryElement = document.querySelector(".gallery");
const lineUpSection = document.querySelector("#line-up");
const lineUpYears = document.querySelector(".line-up-years");

const modal = document.createElement("div");
modal.classList.add("modal");

const fadeOut = () => {
  document.body.style.overflow = "auto";
  modal.classList.add("fade-out");
  modal.ontransitionend = () => {
    if (modal.classList.contains("fade-out")) {
      modal.classList.remove("fade-out");
      modal.classList.remove("visible");
      modal.ontransitionend = null;
    }
  };
};

modal.addEventListener("click", (e) => {
  if (e.target == modal || e.target.closest("button")) {
    fadeOut();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    fadeOut();
  }
});

lineUpSection.appendChild(modal);

function renderLineUp(lineUp) {
  galleryElement.innerHTML = "";

  if (lineUp.length === 0) {
    galleryElement.innerHTML = /*html*/ `<p class="no-line-up">To be announced...</p>`;
  }

  for (let artist of lineUp) {
    const galleryItem = document.createElement("button");
    galleryItem.classList.add(
      "gallery-item",
      "observe",
      "scale-subtle",
      "duration-6"
    );
    galleryItem.innerHTML = /*html*/ `
      <img src="./images/${artist.img}" alt="${artist.name}"/>
      <p><span>${artist.name} | </span>${artist.description}</p>
    `;

    galleryItem.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      modal.classList.remove("fade-out");
      modal.classList.add("visible");
      modal.innerHTML = /*html*/ `
      <div class="modal-inner">
        <button><img src="./logos/cross.svg" alt="close button"/></button>
        <img src="./images/${artist.img}" alt="${artist.name}"/>
        <div class="modal-header">
          <h3>${artist.name}</h3>
          <div class="links">
            ${
              artist.instagramUrl
                ? /*html*/ `<a target="_blank" href="${artist.instagramUrl}">
              <img src="./logos/instagram.svg" alt="instagram logo"/>
              instagram
            </a>`
                : ""
            }
            ${
              artist.spotifyUrl
                ? /*html*/ `<a target="_blank" href="${artist.spotifyUrl}">
              <img src="./logos/spotify.svg" alt="spotify logo"/>
              spotify
            </a>`
                : ""
            }
          </div>
        </div>
        <p>${artist.description.replace(/\n/g, "<br>")}</p>
      </div>
    `;
    });

    galleryElement.appendChild(galleryItem);
    observe();
  }
}

function renderYearButtons() {
  const buttons = Object.keys(lineUps)
    .reverse()
    .map((year) => {
      const button = document.createElement("button");
      button.textContent = year;
      button.addEventListener("click", () => {
        for (const button of lineUpYears.children) {
          button.classList.remove("active");
        }
        button.classList.add("active");
        renderLineUp(lineUps[year]);
      });

      return button;
    });

  buttons[0].classList.add("active");

  for (const button of buttons) {
    lineUpYears.appendChild(button);
  }
}

renderYearButtons();
renderLineUp(lineUps[2025]);
