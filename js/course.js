let filterCard =() => {
   const searchInput=document.getElementById("search-input").value.toLowerCase();
   const cards=document.querySelectorAll('.course-card');
   cards.forEach(card =>{
      const title=document.querySelector('.course-info h2').innerText.toLowerCase();
      const discrip =document.querySelector('.course-info p').innerText.toLowerCase();
      card.style.display=(title.includes(searchInput) || discrip.includes(searchInput)) ? "block" : "none";
   })
   
}