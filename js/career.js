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

    function showDetails(key) {
      const details = document.getElementById("details");
      const title = document.getElementById("details-title");
      const content = document.getElementById("details-content");

      title.textContent = detailsData[key].title;
      content.innerHTML = "";
      detailsData[key].content.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        content.appendChild(li);
      });

      details.style.display = "block";
      window.scrollTo({ top: details.offsetTop, behavior: 'smooth' });
    }

    function hideDetails() {
      document.getElementById("details").style.display = "none";
    }



     
