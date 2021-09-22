import { Select } from "./customSelect";
import { Carousel } from "./carousel";

const contact = document.getElementsByClassName(
  "photographerIdentity__contact"
)[0];
const closeModal = document.getElementsByClassName("dialogForm__close")[0];
const dialog = document.getElementsByClassName("dialog")[0];

contact.addEventListener("click", () => {
  dialog.classList.toggle("visible");
});
closeModal.addEventListener("click", (e) => {
  dialog.classList.toggle("visible");
  e.preventDefault();
});
Select.create();

const carousel = new Carousel(document.querySelector(".carousel"));
document.querySelector(".mediaCard").addEventListener("click", () => {
  carousel.open();
});
