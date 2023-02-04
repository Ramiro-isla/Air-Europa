const ulOffert$$ = document.querySelector(".ofert-list");
const ulManageAccount$$ = document.querySelector(".manage-account-list");
const ulBeforeFlying$$ = document.querySelector(".before-flying-list");
const ulExperienceAE$$ = document.querySelector(".experience-AE-list");
const ulHelp$$ = document.querySelector(".help-list");
const ulAESum$$ = document.querySelector(".AE-sum-list");
const ulMyAccount$$ = document.querySelector(".my-account-list");

function navbarclick(ul) {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}

const element1 = document.querySelector(".carrousel-element1");
const element2 = document.querySelector(".carrousel-element2");

function carrousel() {
    if (element2.style.display === "none") {
        element1.style.display = "block";
      } else {
        element2.style.display = "none";
      }
}
