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
let index = 0;
const searchBox = document.getElementById("searchBox");
    setInterval(() => {
      searchBox.setAttribute("placeholder", placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 2000);


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