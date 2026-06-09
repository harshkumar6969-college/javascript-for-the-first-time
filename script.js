const buttonA = document.querySelector(".yo");
const heading = document.querySelector(".aftereffects");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "";
  heading.textContent = `${count} clicks so far`;
  count += 1;
};