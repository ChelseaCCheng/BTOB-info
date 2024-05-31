let nav = document.getElementById("nav");
let nav_open = document.getElementById("nav_open");
let nav_esc = document.getElementById("nav_esc");
let nav_a = document.getElementsByClassName("nav_a");



if (nav) {
    nav.addEventListener("click", function() {
        nav_open.style.display = "block";
    });
}

nav_esc.addEventListener("click",function(){
    nav_open.style.display = "none";
})

for(i=0; i < nav_a.length; i++){
    nav_a[i].addEventListener("click",function(){
        nav_open.style.display = "none";
    })
}