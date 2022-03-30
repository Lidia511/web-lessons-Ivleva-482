let images = document.querySelectorAll('.carousel-item');
let i;

for (i = 1; i < 7; i++) {
    images[i].style.display = "none";
}

i = 0;

let bLeft = document.getElementById("left");
let bRight = document.getElementById("right");

function carousel (i) {
    images.forEach((img) => {
        img.style.display = "none";
    })
    images[i].style.display = "block";
}

bLeft.addEventListener("click", () => {
    if (i == 0) {
        i = 6;
        carousel(i)
    } else {
        i--;
        carousel(i)
    }
})

bRight.addEventListener("click", () => {
    if (i == 6) {
        i = 0;
        carousel(i)
    } else {
        i++;
        carousel(i)
    }
})