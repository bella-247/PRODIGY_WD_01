const navBar = document.querySelector("header nav")
let navBarHeight = navBar.offsetHeight;
document.documentElement.style.scrollPadding = `${navBarHeight}px`


window.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)

function handleScroll(){
    navBar.classList.toggle("scrolled", window.scrollY > 50)
}

const tabLinks = [...document.querySelectorAll(".tab-links")]

tabLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // e.preventDefault();
        // const linkedElement = document.getElementById(e.currentTarget.getAttribute('href').substring(1));
        // window.scrollTo({
        //     top: linkedElement.offsetTop - navBarHeight,
        //     behavior: "smooth",
        // });
        // removing the active class of the already activated class
        document.querySelector(".tab-links.active").classList.remove("active")
        e.currentTarget.classList.add('active')
    })
})






contact_submit_btn = document.querySelector("#contact form button")
contact_submit_btn.addEventListener("click", (e) => {
    alert("Your form is submitted.")
})