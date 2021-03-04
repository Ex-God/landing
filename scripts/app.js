const sectionImg = document.querySelectorAll('.img-group__img')

window.addEventListener('scroll', function () {
    for (i = 0; i < sectionImg.length; i++) {
        let top = sectionImg[i].getBoundingClientRect().top;
        let bottom = sectionImg[i].getBoundingClientRect().bottom;
        let height = sectionImg[i].getBoundingClientRect().height;

        if ((top + height >= 0) && (height + window.innerHeight / 1.5 >= bottom)) {
            sectionImg[i].style.opacity = '1'
        }
    }
});

