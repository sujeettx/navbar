let menu = document.querySelector("nav i");
let closeMenu = document.querySelector(".full i");
var tl = gsap.timeline();
tl.to(".full",{
    right:0,
    duration:0.6,
})
tl.from(".full h4",{
    x:150,
    duration:0.7,
    stagger:0.28,
    opacity:0
})
tl.from(".full i",{
    x:69,
    duration:0.6,
    opacity:0
})
tl.pause();
menu.addEventListener("click",()=>{
    tl.play();
});

closeMenu.addEventListener("click",()=>{
    tl.reverse();
});
