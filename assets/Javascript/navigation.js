const navigation = document.querySelector(".nav-div");
const toggleNavigation = document.querySelector(".mobile-nav");

toggleNavigation.addEventListener("click", () => {
    const visibility = navigation.getAttribute("data-visible");
    
    if(visibility === "false") {
        navigation.setAttribute('data-visible', true);
        toggleNavigation.setAttribute('aria-expanded', true);
    }
    else {
        navigation.setAttribute('data-visible', false);
        toggleNavigation.setAttribute('aria-expanded', false);
    }
});