function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselWrapper = document.body.querySelector('.carousel__inner');
  let innerWidth = carouselWrapper.offsetWidth;  
  let position = 0;
  let count = 4;

  count == 4 ? carouselArrowLeft.style.display = 'none' : '';   
  
  carouselArrowRight.addEventListener('click', () => {  

      count > 2 ? carouselArrowRight.style.display = '' : carouselArrowRight.style.display = 'none'; 
      
      carouselArrowLeft.style.display = ''; 
      
      position += innerWidth;
      carouselWrapper.style.transform = `translateX(-${position + 'px'})`; 
      count = count-1;

  });

  carouselArrowLeft.addEventListener('click', () => { 

    count == 3 ? carouselArrowLeft.style.display = 'none' : ''; 

    count == 3 ? carouselArrowRight.style.display = '' : '';
    
    carouselWrapper.style.transform = `translateX(${-position + innerWidth*count + 'px'})`;
    // position -= innerWidth;
    count = count+1;
  });

}
