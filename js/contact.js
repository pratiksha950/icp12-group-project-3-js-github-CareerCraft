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


