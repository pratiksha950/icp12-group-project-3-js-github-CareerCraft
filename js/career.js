 let path = location.pathname.includes("/pages/") ? "../pages/header.html" : "./pages/header.html";
fetch(path)
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Header load error:", err));

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if(sidebar){
        sidebar.style.display = "flex";
    }
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if(sidebar){
        sidebar.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
  fetch("../pages/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data)
    .catch(err => console.error("Footer load error:", err));
});


 
 
 
 
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