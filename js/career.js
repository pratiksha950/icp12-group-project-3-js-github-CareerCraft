 let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function moveSlide(step) {
      index = (index + step + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto slide every 5 seconds
    setInterval(() => {
      moveSlide(1);
    }, 5000);