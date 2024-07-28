/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  //script.js

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  let index = 0;
  
  function showSlide(i) {
      if (i >= items.length) index = 0;
      else if (i < 0) index = items.length - 1;
      else index = i;
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }
  
  prevButton.addEventListener('click', () => {
      showSlide(index - 1);
  });
  
  nextButton.addEventListener('click', () => {
      showSlide(index + 1);
  });
  
  // Optional: Auto-slide every 3 seconds
  setInterval(() => {
      showSlide(index + 1);
  }, 3000);