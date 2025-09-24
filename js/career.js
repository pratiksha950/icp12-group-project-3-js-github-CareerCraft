// Hero Slider JS
    let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    const dotsContainer = document.getElementById("dots");

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.children;
    updateDots();

    function moveSlide(step) {
      index = (index + step + totalSlides) % totalSlides;
      updateSlider();
    }

    function goToSlide(slideIndex) {
      index = slideIndex;
      updateSlider();
    }

    function updateSlider() {
      slides.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    function updateDots() {
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      dots[index].classList.add("active");
    }

    setInterval(() => moveSlide(1), 4000);

