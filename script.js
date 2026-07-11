window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "rgba(0,0,0,0.8)";
}
else{
navbar.style.background = "rgba(0,0,0,0.4)";
}

});

console.log("Portfolio Loaded Successfully");