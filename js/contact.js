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
const contactCard = [
    {
        imgUrl: "../images/contact-us/m2.jpg",
        memberName: "Sarah Johnson",
        role: "Career Counselor",
        sector: "Technology & Engineering"
    },
    {
        imgUrl: "../images/contact-us/m1.jpg",
        memberName: "John Smith",
        role: "Mentor",
        sector: "Graduate programs & research"
    },
    {
        imgUrl: "../images/contact-us/m3.jpg",
        memberName: "Emily Davis",
        role: "Advisor",
        sector: "Course guidance & e-learning"
    },
    {
        imgUrl: "../images/contact-us/m3.jpg",
        memberName: "David Thompson",
        role: "Scholarship Specialist",
        sector: "Financial aid & scholarships"
    }
];

const memberList = document.getElementById("contact-card-container");

for (let i = 0; i < contactCard.length; i++) {
    memberList.innerHTML += `
        <div class="contact-card">
            <img src="${contactCard[i].imgUrl}" alt="${contactCard[i].memberName}">
            <h4>${contactCard[i].memberName}</h4>
            <p>${contactCard[i].role}</p>
            <p>${contactCard[i].sector}</p>
        </div>
    `;
}

function toggleTheme() {
    const themeIcon = document.getElementById("theme-icon");

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "../images/contact-us/sun.png";  
    } else {
        themeIcon.src = "../images/contact-us/moon.png"; 
    }
}

function showMessage() {
    const msg = document.getElementById("message");

    msg.style.display = "block"; 
    setTimeout(() => {
        msg.style.display = "none";
    }, 2000);
}

function saveMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageText = document.getElementById("messageText").value.trim();

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({
        name: name,
        email: email,
        message: messageText
        
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("messageText").value = "";

    showMessage();
}
