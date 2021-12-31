function myFun() {
  alert("Thanks for registering your account");
}
// var imageAr = ['website-images-assets/cantor-gallery.jpg',
// 'website-images-assets/IMG_1318.jpeg',
//  'website-images-assets/IMG_1005.jpeg' ]

// console.dir(imageAr)

// chgImage();
// setInterval(chgImage, 2000)
// var imgCounter = 0;
// function chgImage()
// {
//   document.getElementById("slide").setAttribute("src", imageAr[imgCounter]);
//   imgCounter++;
//   if (imgCounter === imageAr.length)
//   {
//     imgCounter = 0;
//   }
// }
function myFunction() {
    var x = document.getElementById("myPswrd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function init(){
    alert("Thanks for filling the form, we will get back to you!")
  }
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Sliides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}