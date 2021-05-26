function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselWrapper = document.body.querySelector('.carousel__inner');
  let innerWidth = carouselWrapper.offsetWidth;  
  let position = 1;

  if (position == 1) {
    carouselArrowLeft.style.display = 'none' ;
  }
  
  carouselArrowRight.addEventListener('click', () => {  

      if (position > 2) {
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrowRight.style.display = '';
      }
      
      carouselArrowLeft.style.display = '';       

      carouselWrapper.style.transform = `translateX(-${position*innerWidth + 'px'})`; 
      position = position + 1;

  });

  carouselArrowLeft.addEventListener('click', () => { 

    if (position == 2) {
      carouselArrowLeft.style.display = 'none'; 
    }

    if (position == 4) {
      carouselArrowRight.style.display = '';  
    }  
  
    carouselWrapper.style.transform = `translateX(${(-position + 1)*innerWidth + innerWidth + 'px'})`;
    position = position - 1;
  
  });

}
