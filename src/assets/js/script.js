const toggleTheme = document.getElementById ("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
    const currentTime = rootHtml.getAttribute("data-theme");

    if(currentTime === "dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-lamp")
    toggleTheme.classList.toggle("bi-lamp-fill")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
  })
  
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })