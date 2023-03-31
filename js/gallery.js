import lineUp from "./line-up.js";

const galleryElement = document.querySelector(".gallery");
console.log(lineUp);

for (let artist of lineUp) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  galleryItem.innerHTML = `
  <img src="./images/artists/${artist.img}" alt="${artist.name}"/>
  <p><span>${artist.name} | </span>${artist.shortDescription}</p>
  `;

  galleryElement.appendChild(galleryItem);
}
