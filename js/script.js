console.log("Hello World!");
const myName = "Sebastian Manco";

const h1 = document.querySelector(".heading-primary");
console.log(h1);

h1.addEventListener("click", (elem) => {
  console.log("Hi there");
  h1.textContent = myName;
  h1.style.backgroundColor = "tomato";
  h1.style.padding = "3.4rem";
});

//Set current year.
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-movil-nav");
const headernavEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (elem) => {
  console.log("Hi there");
  elem.preventDefault();
  headernavEl.classList.toggle("nav-open");
});

//sticky Naviguation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
