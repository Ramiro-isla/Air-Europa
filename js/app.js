const ulOffert$$ = document.getElementById("ofert-list");
const ulManageAccount$$ = document.getElementById("manage-account-list");
const ulBeforeFlying$$ = document.getElementById("before-flying-list");
const ulExperienceAE$$ = document.getElementById("experience-AE-list");
const ulHelp$$ = document.getElementById("help-list");
const ulAESum$$ = document.getElementById("AE-sum-list");
const ulMyAccount$$ = document.getElementById("my-account-list");

function navbarclick(ul) {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}

const element1 = document.getElementById("carrousel-element1");
const element2 = document.getElementById("carrousel-element2");

function carrousel() {
    if (element2.style.display === "none") {
        element1.style.display = "block";
      } else {
        element2.style.display = "none";
      }
}
