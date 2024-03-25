import data from "./data.js";

const template = document.querySelector(".job__template");
const ul = document.querySelector(".job__list");

data.forEach((job) => {
  const { company, location, position, postedAt, logo, contract } = job;
  const li = template.content.cloneNode(true);

  const image = li.querySelector(".job__image");
  image.src = logo;

  ul.appendChild(li);
});
