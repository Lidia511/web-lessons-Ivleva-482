let images = document.querySelectorAll('.carousel-item');
let i;

for (i = 1; i < images.length; i++) {
    images[i].style.display = "none";
}

for (i = 0; i < images.length; i++) {
    const topNav = document.querySelector('.top-nav')
    let linkSlideNum = `
        <div class="number-slide">
            <a href="#">${i+1}</a>
        </div>`;
    topNav.insertAdjacentHTML('afterbegin', linkSlideNum);
}

let slideNumClick = document.querySelectorAll('.number-slide');
slideNumClick.forEach((slide) => {
    slide.addEventListener("click", (elem) => {
        elem.preventDefault();
        let slideIndex = slide.querySelector('a').innerText;
        slideIndex--;
        i = slideIndex;
        imgShow(i);
    })
})

for (i = 0; i < images.length; i++) {
    const bottomNav = document.querySelector('.bottom-nav');
    let SlideChoose = `<img src="image/${i+1}.jpg" class="slide-choose">`
    bottomNav.insertAdjacentHTML('beforeend', SlideChoose);
}

let slideChooseClick = document.querySelectorAll('.slide-choose');
slideChooseClick.forEach((slider, slideChooseIndex) => {
    slider.addEventListener("click", () => {
        i = slideChooseIndex;
        imgShow(i);
    })
})

i = 0;

let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

function imgShow (i) {
    images.forEach((img) => {
        img.style.display = "none";
    })
    images[i].style.display = "block";
}

btnLeft.addEventListener("click", () => {
    if (i == 0) {
        i = images.length-1;
        imgShow(i)
    } else {
        i--;
        imgShow(i)
    }
})

btnRight.addEventListener("click", () => {
    if (i == images.length-1) {
        i = 0;
        imgShow(i)
    } else {
        i++;
        imgShow(i)
    }
})