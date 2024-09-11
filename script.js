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
        // removing the active class of the already activated class
        document.querySelector(".tab-links.active").classList.remove("active")
        e.currentTarget.classList.add('active')
    })
})

const dropLinks = [...document.querySelectorAll("nav .drop-links")]

dropLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // removing the active class of the already activated class
        document.querySelector(".drop-links.active").classList.remove("active")
        e.currentTarget.classList.add('active')
    })
})



// using intersection observer to change the active nav link when the specified section is intesecting the view
const sections = document.querySelectorAll('main section');

function check_current_active_nav_menu(){
    const tabMenus = document.querySelector("nav .tab-menus");
    const tabMenusStyle = getComputedStyle(tabMenus)
    return tabMenusStyle.display == "none" ? ".drop-links" : ".tab-links"
}
const observerOptions = {
    root: null,
    rootMargin: `-${navBarHeight}px 0px 0px 0px`,
    threshold: 0.5
}



const observerCallback = (entries) =>{
    entries.forEach(entry =>{
        const { target, isIntersecting } = entry;
        const id = target.getAttribute("id");
        const currentActive = check_current_active_nav_menu();
        const navLink = document.querySelector(`nav ${currentActive}[href="#${id}"]`);

        if (isIntersecting){
            document.querySelector(`${currentActive}.active`).classList.remove("active")
            navLink.classList.add("active");
        }
    })
}


const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));






// contact page


contact_submit_btn = document.querySelector("#contact form button")
contact_submit_btn.addEventListener("click", (e) => {
    alert("Your form is submitted.")
})