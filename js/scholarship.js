function filterCards() {
    const value=document.getElementById('categories').value;
const cards= document.querySelectorAll('.scho-card');
cards.forEach(card=>{
    card.style.display=(value=== "All" || card.dataset.category=== value) ? "block" : "none";
})
}