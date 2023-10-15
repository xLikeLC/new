// Swiper

var swiper = new Swiper(".swiper-container", {
  // autoplay: {
  //   delay: 4000,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  allowTouchMove: true,
  loop: true,
});

// //search

// const icon = document.querySelector(".icon");
// const search = document.querySelector(".search");
// icon.onclick = function () {
//   search.classList.toggle("active");
// };

// search v2

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  if (searchInput.value != "") {
    let value = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "" + value;
  } else {
    searchData.innerHTML = " ";
  }
};
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.add("active");
  searchInput.value = "";
};

// burger

const burgerBtn = document.querySelector(".burger");
const menuClose = document.querySelector(".menu-close");
const menuBurger = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  menuBurger.classList.add("burger-active");
});

menuClose.addEventListener("click", () => {
  menuBurger.classList.remove("burger-active");
});

// accorditon

$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});

// operate-tabs

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".operate__btn").forEach(function (e) {
    e.addEventListener("click", function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (e) {
        e.classList.remove("tab-content--active");

        document
          .querySelector(`[data-target='${tab}']`)
          .classList.add("tab-content--active");
      });
    });

    e.addEventListener("click", function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll(".operate__btn").forEach(function (e) {
        e.classList.remove("operate__btn--default");
        document
          .querySelector(`[data-path='${tabDefault}']`)
          .classList.add("operate__btn--default");
      });
    });
  });
});
