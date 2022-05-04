const parent = document.querySelectorAll(".parent");
const allChild = [...parent[0].children, ...parent[1].children];
const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", () => parent[1].classList.toggle("hidden"));

allChild.forEach((child) =>
  child.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;
    const previousClicked = document.querySelector(".clicked");
    if (previousClicked) previousClicked.classList.remove("clicked");
    e.target.classList.toggle("clicked");
  })
);
