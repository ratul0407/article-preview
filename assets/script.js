"use strict";
const share = document.querySelector(".share");
const icon = document.querySelector(".icon");
share.addEventListener("click", () => {
  icon.classList.toggle("hidden");
  icon.classList.toggle("flex");
  document.querySelector(".share-icon").style.src =
    "./images/icon-share-tweak.svg";
});
