// About me section
// Variables
// Text elements
let skills = document.querySelector(".jsSkills");
let experience = document.querySelector(".jsExperience");
let education = document.querySelector(".jsEducation");
let infoTitle1 = document.querySelector(".jsInfoTitle1");
let infoTitle2 = document.querySelector(".jsInfoTitle2");
let infoTitle3 = document.querySelector(".jsInfoTitle3");
let infoTitle4 = document.querySelector(".jsInfoTitle4");
let info1 = document.querySelector(".jsInfo1");
let info2 = document.querySelector(".jsInfo2");
let info3 = document.querySelector(".jsInfo3");
let info4 = document.querySelector(".jsInfo4");
// Decoration elements
let skillsSpan = document.querySelector(".jsSkillsSpan");
let experienceSpan = document.querySelector(".jsExperienceSpan");
let educationSpan = document.querySelector(".jsEducationSpan");

// Displays skills sub-content, adds animation to skills heading and removes animation from other headings
function displaySkills() {
  skillsSpan.style.right = "50%";
  experienceSpan.style.right = "100%";
  educationSpan.style.right = "100%";
  infoTitle1.textContent = "UI/UX";
  infoTitle2.textContent = "Web Development";
  infoTitle3.textContent = "App Development";
  infoTitle4.textContent = "";
  info1.textContent = "Designing web/app interfaces.";
  info2.textContent = "Web app development.";
  info3.textContent = "Building Android/iOS apps.";
  info4.textContent = "";
}

skills.addEventListener("click", () => {
  displaySkills();
});
// Displays skills sub-content by default
displaySkills();

// Displays experience sub-content, adds animation to experience heading and removes animation from other headings
function displayExperience() {
  experienceSpan.style.right = "50%";
  skillsSpan.style.right = "100%";
  educationSpan.style.right = "100%";
  infoTitle1.textContent = "2021 - Current";
  infoTitle2.textContent = "2019 - 2021";
  infoTitle3.textContent = "2017 - 2019";
  infoTitle4.textContent = "2016 - 2017";
  info1.textContent = "UI/UX design training at ET institute.";
  info2.textContent = "Team lead at StarApp LLC.";
  info3.textContent = "UI/UX design executive at Coin Digital Ltd.";
  info4.textContent = "Internship at ekart eCommerce.";
}
experience.addEventListener("click", () => {
  displayExperience();
});

// Displays education sub-content, adds animation to education heading and removes animation from other headings
function displayEducation() {
  educationSpan.style.right = "50%";
  skillsSpan.style.right = "100%";
  experienceSpan.style.right = "100%";
  infoTitle1.textContent = "2016";
  infoTitle2.textContent = "2016";
  infoTitle3.textContent = "2014";
  infoTitle4.textContent = "";
  info1.textContent = "UI/UX design training at ET Institute.";
  info2.textContent = "MBA from MIT Bangalore.";
  info3.textContent = "BBA from ISM Bangalore";
  info4.textContent = "";
}
education.addEventListener("click", () => {
  displayEducation();
});

// Back to top btn is visible when page is scrolled to bottom
let backToTop = document.querySelector(".jsBackToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

// Download CV
let downloadCV = document.querySelector(".jsDownloadCV");
downloadCV.addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "images/my-cv.pdf";
  link.download = "my-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Nav Menu
// Variables
let menu = document.querySelector(".jsMenu");
let ul = document.querySelector(".jsNavUl");
let header = document.querySelector("header");

// Toggles nav on menu click
menu.addEventListener("click", () => {
  menu.classList.toggle("rotate");
  ul.classList.toggle("show-nav");
});

// Hides nav when clicked away from
window.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    menu.classList.remove("rotate");
    ul.classList.remove("show-nav");
  }
});

// Hides nav if nav link is clicked
ul.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    menu.classList.remove("rotate");
    ul.classList.remove("show-nav");
  }
});
