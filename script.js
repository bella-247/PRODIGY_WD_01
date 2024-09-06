const navBar = document.querySelector("header nav")
const navBarHeight = navBar.offsetHeight;

window.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)

function handleScroll(){
    navBar.classList.toggle("scrolled", window.scrollY > 100)
}

const tabLinks = [...document.querySelectorAll(".tab-links")]

tabLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const linkedElement = document.getElementById(e.currentTarget.getAttribute('href').substring(1));
        window.scrollTo({
            top: linkedElement.offsetTop - navBarHeight,
            behavior: 'smooth'
        });
    })
})

