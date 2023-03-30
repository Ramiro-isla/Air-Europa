import "./slider.js";
const ulOffert$$ = document.querySelector(".ofert-list");
const ulManageAccount$$ = document.querySelector(".manage-account-list");
const ulBeforeFlying$$ = document.querySelector(".before-flying-list");
const ulExperienceAE$$ = document.querySelector(".experience-AE-list");
const ulHelp$$ = document.querySelector(".help-list");
const ulAESum$$ = document.querySelector(".AE-sum-list");
const ulMyAccount$$ = document.querySelector(".my-account-list");

function navbarclick(ul) {
  if (ul.style.display == "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}
