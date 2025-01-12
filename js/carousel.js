const carouselElement = document.querySelector(".carousel");
const pictureElement = carouselElement.querySelector(".picture");
const imageElements = pictureElement.querySelectorAll("img");
const prevButtonElement = carouselElement.querySelector(".prev");
const nextButtonElement = carouselElement.querySelector(".next");

const initialWidth = window.outerWidth;

pictureElement.style.setProperty("--image-count", imageElements.length);

let index = 0;

const setState = () => {
  index = Math.round(pictureElement.scrollLeft / pictureElement.clientWidth);
  prevButtonElement.disabled = index === 0;
  nextButtonElement.disabled = index === imageElements.length - 1;
};

setState();

prevButtonElement.addEventListener("click", () => {
  if (index <= 0) return;

  imageElements
    .item(--index)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

nextButtonElement.addEventListener("click", () => {
  if (index >= imageElements.length - 1) return;

  imageElements
    .item(++index)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

window.addEventListener("resize", () => {
  if (window.outerWidth === initialWidth) return;

  imageElements
    .item(index)
    ?.scrollIntoView({ behavior: "instant", block: "nearest" });
});

pictureElement.addEventListener("scroll", setState);
