let gender = getCookie("gender");
let genderElement = document.getElementById("gender");
let pElement = document.getElementById("paragraph");

if (gender === "male") {
  genderElement.src = "./imgs/1.jpg";
} else {
  genderElement.src = "./imgs/2.jpg";
}

if (hasCookie("visits")) {
  setCookie("visits", parseInt(getCookie("visits")) + 1, 7);
}

pElement.innerHTML =
  "<p>Welcome <span style='color:" +
  getCookie("color") +
  "; font-size: 1.5rem; font-weight: bolder;' >" +
  getCookie("name") +
  "</span> you have visited this site <span style='color:" +
  getCookie("color") +
  "; font-size: 1.5rem; font-weight: bolder;' >" +
  +getCookie("visits") +
  "</span> times</p>";
