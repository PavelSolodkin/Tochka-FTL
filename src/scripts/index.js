import "../scss/app.scss";
import img_up from "../images/arrow-up.png";
import img from "../images/arrow-down.png";

const checkmark = document.querySelector(".checkmark");
const temp = document.querySelector(".temp");
checkmark.addEventListener("click", () => {
  temp.classList.toggle("isActive");
});

const body = document.querySelectorAll(".select__body");
const item = document.querySelectorAll(".select__item");
const icon = document.querySelectorAll(".select__icon");
const header = document.querySelectorAll(".select__header");

for (let i = 0; i < icon.length; i++) {
  icon[i].src = img;
  header[i].addEventListener("click", () => {
    body[i].classList.toggle("isActive");
    if (body[i].classList.contains("isActive")) {
      icon[i].src = img_up;
    } else {
      icon[i].src = img;
    }
  });
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    item[i].closest(".select").querySelector(".select__current").innerText =
      item[i].innerText;
    item[i]
      .closest(".select")
      .querySelector(".select__body")
      .classList.toggle("isActive");
    item[i].closest(".select").querySelector(".select__icon").src = img;
    item[i]
      .closest(".select")
      .querySelector(".select__current")
      .classList.remove("select__current_gray");
  });
}
