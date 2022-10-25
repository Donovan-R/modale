const btns = document.querySelectorAll("button");
const hiddenPage = document.querySelector(".hiddenPage");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    hiddenPage.classList.toggle("openModale");
  });
});
