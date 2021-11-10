const navIcons = document.querySelectorAll(".navbar__utility svg");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar__logo-svg");
if (navbar.id === "homePageNav") {
  window.onscroll = () => {
    if (
      document.body.scrollTop >= 150 ||
      document.documentElement.scrollTop >= 150
    ) {
      navbar.classList.add("navbar--white");
      logo.classList.add("fill-black");
      logo.classList.remove("fill-white");

      navIcons.forEach((svg) => {
        svg.classList.add("fill-black");
        svg.classList.remove("fill-white");
      });
    } else {
      navbar.classList.remove("navbar--white");
      logo.classList.add("fill-white");
      logo.classList.remove("fill-black");

      navIcons.forEach((svg) => {
        svg.classList.remove("fill-black");
        svg.classList.add("fill-white");
      });
    }
  };
}

const navLinksNames = ["men", "women", "kids"];
const navLinksMenus = [];

navLinksNames.forEach((link, index) => {
  navLinksMenus.push({
    link: document.querySelector("#" + link),
    menu: document.querySelector(
      "#menu" + link.charAt(0).toUpperCase() + link.slice(1)
    ),
  });

  navLinksMenus[index].link.addEventListener("click", () => {
    navLinksMenus[index].menu.classList.toggle("submenu-show");
    navLinksMenus.forEach((element, i) => {
      if (index !== i) {
        element.menu.classList.remove("submenu-show");
      }
    });
  });
});
