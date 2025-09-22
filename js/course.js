let searchCard = () => {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        const title = card.querySelector('.course-info h2').innerText.toLowerCase();
        const discrip = card.querySelector('.course-info p').innerText.toLowerCase();
        card.style.display = (title.includes(searchInput) || discrip.includes(searchInput)) ? "block" : "none";
    })
};

let filterCards = () => {
    const value = document.getElementById("level").value;
    const cards = document.querySelectorAll(".course-card");
    cards.forEach(card => {
        card.style.display = (card.dataset.level === value || value === "All") ? "block" : "none";
    })
}

let setEnrolledState = (button) => {
    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const btns = document.querySelectorAll(".enroll-btn");
    const courseId=button.dataset.id;
    button.style.backgroundColor = "#e6ffe6"
    button.style.color = "#003300"
    button.innerText = "Enrolled";
    button.style.fontWeight = "550"
    if (!enrolledCourses.includes(courseId)) {
        enrolledCourses.push(courseId);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }
}


let initEnrollment = () => {
    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const btns = document.querySelectorAll(".enroll-btn");
    btns.forEach(btn => {
        const courseId = btn.dataset.id;
        if (enrolledCourses.includes(courseId)) {
            btn.style.backgroundColor = "#e6ffe6"
            btn.style.color = "#003300"
            btn.innerText = "Enrolled";
           btn.style.fontWeight = "550"
        }
        btn.onclick = () => setEnrolledState(btn);
    });
}

window.onload = initEnrollment;




