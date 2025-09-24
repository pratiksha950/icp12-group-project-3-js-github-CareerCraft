function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hideSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="none";
}
 const placeholders = [
    "Search for Scholarships",
    "Search for Career Guidance",
    "Search for E-learning",
    "Search for Courses",
    "Search for career-info"
];
let index1 = 0;
const searchBox = document.getElementById("searchBox");
    setInterval(() => {
      searchBox.setAttribute("placeholder", placeholders[index1]);
      index1 = (index1 + 1) % placeholders.length;
    }, 2000);

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
    // Show Details Function
function showDetails(career) {
  const details = detailsData[career];
  document.getElementById("details-title").innerText = details.title;
  
  const list = document.getElementById("details-list");
  list.innerHTML = "";
  details.content.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.querySelector(".cards-section").style.display = "none";
  document.getElementById("details").style.display = "block";
}

// Hide Details
function hideDetails() {
  document.getElementById("details").style.display = "none";
  document.querySelector(".cards-section").style.display = "block";
}


