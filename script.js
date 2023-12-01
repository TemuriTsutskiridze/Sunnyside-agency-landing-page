const burgerMenu = document.querySelector(".burgerIcon");
const navigation = document.querySelector("nav");

// let navActive = false;

burgerMenu.addEventListener("click", () => {
  //   if (!navActive) {
  //     navigation.classList.add("navigationActive");
  //     navActive = true;
  //   } else {
  //     navigation.classList.remove("navigationActive");
  //     navActive = false;
  //   }
  navigation.classList.toggle("navigationActive");
});
