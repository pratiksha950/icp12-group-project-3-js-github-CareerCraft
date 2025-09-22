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









function filterCards() {
    const value=document.getElementById('categories').value;
const cards= document.querySelectorAll('.scho-card');
cards.forEach(card=>{
    card.style.display=(value=== "All" || card.dataset.category=== value) ? "block" : "none";
})
}

let searchScholarships = () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const cards =document.querySelectorAll('.scho-card');
    cards.forEach(card=>{
        const title = card.querySelector('.scho-text').innerText.toLowerCase();
        const description = card.querySelector('.scho-info p').innerText.toLowerCase();
        const eligibility = card.querySelector('.eligibility li').innerText.toLowerCase();
        card.style.display = (title.includes(searchInput) || description.includes(searchInput) || eligibility.includes(searchInput)) ? "block" : "none";
    });
}