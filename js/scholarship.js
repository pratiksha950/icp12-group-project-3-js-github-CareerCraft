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