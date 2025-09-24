// Clock
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Light buttons
  document.getElementById('lightOn').addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffffff'; // white light
  });

  document.getElementById('lightOff').addEventListener('click', () => {
    document.body.style.backgroundColor = '#2c3e50'; // dark/off
  });

  // Courses 5x2
  const courses = [
    { title: "HTML Basics", videoId: "VQHV63Wzsyk", desc: "Learn HTML from scratch." },
    { title: "CSS Basics", videoId: "OXGznpKZ_sA", desc: "CSS styling and layouts." },
    { title: "JavaScript Basics", videoId: "PkZNo7MFNFg", desc: "JS fundamentals for beginners." },
    { title: "React Basics", videoId: "RVFAyFWO4go", desc: "React components and hooks." },
    { title: "Python Basics", videoId: "rfscVS0vtbw", desc: "Learn Python programming." },
    { title: "Machine Learning Intro", videoId: "i_LwzRVP7bg", desc: "Introduction to ML." },
    { title: "Node.js Basics", videoId: "TlB_eWDSMt4", desc: "Node.js server-side programming." },
    { title: "SQL Basics", videoId: "HXV3zeQKqGY", desc: "Database and SQL queries." },
    { title: "Data Science Basics", videoId: "ua-CiDNNj30", desc: "Data science with Python." },
    { title: "AI Intro", videoId: "JMUxmLyrhSk", desc: "Artificial Intelligence overview." }
  ];

  const grid = document.getElementById('grid');
  const modal = document.getElementById('videoModal');
  const videoContainer = document.getElementById('videoContainer');
  const modalTitle = document.getElementById('modalTitle');
  const closeModalBtn = document.getElementById('closeModal');

  function getThumb(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb"><img src="${getThumb(course.videoId)}" alt="${course.title}"></div>
      <div class="info"><h3>${course.title}</h3><p>${course.desc}</p></div>
      <button class="btn" data-id="${course.videoId}" data-title="${course.title}">Watch</button>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('button[data-id]');
    if(!btn) return;
    const id = btn.dataset.id;
    const title = btn.dataset.title;
    modalTitle.textContent = title;
    videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>`;
    modal.showModal();
  });

  closeModalBtn.addEventListener('click', ()=>{
    modal.close();
    videoContainer.innerHTML = '';
  });



//slideshow

  const images=["img/blue-black-peacock.jpg","img/peacock-1-jpg" ,"img/peacock-2-jpg","img/peacock-3-jpg" ,"img/peacock-4-jpg" ,"img/peacock-5-jpg"];
        const slide=document.getElementById(`slide`);
        let index=0;
        function right(){
          if(index<images.length -1){
            index++;
          } 
          else{
            index=0
          }
          slide.src=images[index]

        }
        
        function left(){
          if(index>0){
            index--;
          } 
          else{
            index=images.length -1;
          }
          slide.src=images[index]
        }
       
    
