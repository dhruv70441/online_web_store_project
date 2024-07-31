//for nav toggle button
document.getElementById("toggle").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link
    var nav = document.getElementById("responsive-nav");
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });


  //for cerousal

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
  
  // Auto-slide every 3 seconds
  setInterval(() => {
      showSlide(index + 1);
  }, 3000);


