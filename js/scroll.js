import smoothscrollAnchorPolyfill from "smoothscroll-anchor-polyfill";
smoothscrollAnchorPolyfill;

//===========================================================//
//+++ viewing observer +++||---------------------------------//
//===========================================================//

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("observed");
      }
    });
  },
  { threshold: 0.25 }
);

export function observe() {
  const observeElements = document.querySelectorAll(".observe");
  for (let element of observeElements) {
    observer.observe(element);
  }
}

observe();
