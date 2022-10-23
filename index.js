// creating function to go to anchor points I set in my index.html
// selects all anchor points and puts them into an array 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // event listener is waiting for the event "click" to perform my function
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // selects anchor point individually
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAILED SLIDESHOW JAVA CODE

// creating function for slideshow previous/next button as well as circles to jump slides
// let slideIndex = 1;
// showSlides(slideIndex);

// function changeSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex =  n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slideCounter");
//     let circles = document.getElementsByClassName("circle");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < circles; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     circles[slideIndex-1].className += " active";
// }