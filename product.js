function changeImage(smallImage) {
   var largeImage = document.getElementById('largeImage');
   largeImage.src = smallImage.src;
 }
//--------------------anh theo chuot--------
 var img = document.querySelector('.scroll-image');
var img1 = document.querySelector('.scroll-image1');
var imgTop = img.offsetTop;
var imgTop1 = img1.offsetTop;
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  img.style.top = (imgTop +scrollTop) + 'px';
  img1.style.top = (imgTop1 +scrollTop) + 'px';
});