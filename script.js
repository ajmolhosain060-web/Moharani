const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },3000);

});


const btn = document.getElementById("startBtn");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="scale(1)";

});


btn.addEventListener("click",()=>{

    alert("🌸 The journey has just begun, Moharani ❤️");

});
