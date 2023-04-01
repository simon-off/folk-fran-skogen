import lineUp from "./line-up.js";

const galleryElement = document.querySelector(".gallery");
const lineUpSection = document.querySelector("#line-up");

const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `<p>HEJ HALLÅ</p>`;
modal.style.display = "none";
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.style.display = "none";
  }
});
lineUpSection.appendChild(modal);

for (let artist of lineUp) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  galleryItem.innerHTML = `
  <img src="./images/artists/${artist.img}" alt="${artist.name}"/>
  <p><span>${artist.name} | </span>${artist.shortDescription}</p>
  `;

  galleryItem.addEventListener("click", () => {
    modal.style.display = "grid";
    modal.innerHTML = `
    <div class="modal-inner">
      <button><img src="./logos/cross.svg" alt="close button"/></button>
      <img src="./images/artists/${artist.img}" alt="${artist.name}"/>
      <p><span>${artist.name} | </span>${artist.shortDescription}</p>
      <div class="links">
        <a target="_blank" href="${artist.instagramUrl}"
          ><img src="./logos/instagram.svg" alt="instagram logo"
        /></a>
        ${
          artist.spotifyUrl
            ? `<a target="_blank" href="${artist.spotifyUrl}"
          ><img src="./logos/spotify.svg" alt="spotify logo"
        /></a>`
            : ""
        }
      </div>
    </div>
    `;
  });

  galleryElement.appendChild(galleryItem);
}
