

  const feedbackBtn = document.getElementById('feedbackBtn');
  const feedbackModal = document.getElementById('feedbackModal');
  const closeModal = document.getElementById('closeModal');
  const feedbackForm = document.getElementById('feedbackForm');
  const scholarCards = document.querySelector('.scholar-cards'); 
  const imageFileInput = document.getElementById('imageFile');

  // Load saved feedbacks
  window.addEventListener("DOMContentLoaded", () => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    savedFeedbacks.forEach(data => addScholarCard(data));
  });

  feedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    feedbackModal.style.display = 'none';
  });

  // Add new scholar card
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const file = imageFileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
      const data = {
        name: document.getElementById('name').value,
        course: document.getElementById('course').value,
        imageUrl: e.target.result, 
        feedback: document.getElementById('feedback').value
      };

      addScholarCard(data);

      let savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      savedFeedbacks.push(data);
      localStorage.setItem("feedbacks", JSON.stringify(savedFeedbacks));

      feedbackModal.style.display = 'none';
      feedbackForm.reset();
    };

    if (file) {
      reader.readAsDataURL(file); 
    }
  });

  function addScholarCard(data) {
    const newCard = document.createElement('div');
    newCard.classList.add('scholar-card');
    newCard.innerHTML = `
      <img src="${data.imageUrl}" alt="${data.name}" />
      <h3>${data.name}</h3>
      <p>${data.course}. ${data.feedback}</p>
    `;
    scholarCards.appendChild(newCard);
  }

    window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.about-section, .team-section');
      const windowHeight = window.innerHeight;
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    });
  
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.about-section, .team-section');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });