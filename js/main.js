(function(){
function myFunction() {
    var x = document.getElementById("myPswrd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction() {
    alert("Thanks for registering your account");
  }
var imageAr = ['website-images-assets/IMG_1005.jpeg',
'website-images-assets/cantor-gallery.jpg',
'website-images-assets/IMG_1439.jpeg' ]

console.dir(imageAr)

chgImage();
setInterval(chgImage, 2000)
var imgCounter = 0;
function chgImage()
{
  document.getElementById("slide").setAttribute("src", imageAr[imgCounter]);
  imgCounter++;
  if (imgCounter === imageAr.length)
  {
    imgCounter = 0;
  }
}

})()