const contactCard = [
    {
        imgUrl: "https://via.placeholder.com/120",
        memberName: "Sarah Johnson",
        role: "Career Counselor",
        sector: "Technology & Engineering"
    },
    {
        imgUrl: "https://via.placeholder.com/120",
        memberName: "John Smith",
        role: "Mentor",
        sector: "Computer Science"
    },
    {
        imgUrl: "https://via.placeholder.com/120",
        memberName: "Emily Davis",
        role: "Advisor",
        sector: "Mechanical Engineering"
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
