const slides = document.querySelectorAll('.slide-item');


function nextSlide(){
const activeSlide = document.querySelector(".slide-active");

activeSlide.classList.remove('slide-active')

if(activeSlide.nextElementSibling){
activeSlide.nextElementSibling.classList.add('slide-active');
}else{
   slides[0].classList.add('slide-active');
}
}

function prevSlide(){
   const activeSlide = document.querySelector(".slide-active");
  
  activeSlide.classList.remove('slide-active');
  
  if(activeSlide.previousElementSibling){
  activeSlide.previousElementSibling.classList.add('slide-active');
  }else{
      slides[slides.length - 1].classList.add('slide-active');
  }
  }
  