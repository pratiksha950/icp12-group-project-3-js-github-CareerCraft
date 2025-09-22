let path = location.pathname.includes("/pages/") ? "../pages/header.html" : "./pages/header.html";
fetch(path)
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Header load error:", err));

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if(sidebar){
        sidebar.style.display = "flex";
    }
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if(sidebar){
        sidebar.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
  fetch("../pages/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data)
    .catch(err => console.error("Footer load error:", err));
});


const dialog = document.getElementById('courseDialog');
    const courseTitle = document.getElementById('courseTitle');
    const courseDetails = document.getElementById('courseDetails');

    const courses = {
      "HTML & CSS Basics": {
        description: "This course covers the fundamentals of web development with HTML and CSS.",
        duration: "4 Weeks",
        level: "Beginner",
        topics: ["HTML Tags", "Forms & Tables", "CSS Selectors", "Layouts", "Responsive Design"]
      },
      "JavaScript Essentials": {
        description: "Learn JavaScript to make websites dynamic and interactive.",
        duration: "6 Weeks",
        level: "Intermediate",
        topics: ["Variables", "Functions", "DOM Manipulation", "Events", "Loops & Conditions"]
      },
      "Python for Beginners": {
        description: "Start coding in Python with simple examples and projects.",
        duration: "5 Weeks",
        level: "Beginner",
        topics: ["Syntax & Variables", "Data Types", "Loops & Functions", "Lists & Dictionaries", "Basic Projects"]
      },
      "React Fundamentals": {
        description: "Learn React to build single-page applications with reusable components.",
        duration: "6 Weeks",
        level: "Intermediate",
        topics: ["JSX", "Components", "Props & State", "Hooks", "Routing"]
      },
      "Data Science with Python": {
        description: "Master data analysis and visualization with Python.",
        duration: "8 Weeks",
        level: "Advanced",
        topics: ["NumPy", "Pandas", "Data Cleaning", "Matplotlib & Seaborn", "Machine Learning Basics"]
      },
      "SQL & Databases": {
        description: "Learn to manage and query databases with SQL.",
        duration: "5 Weeks",
        level: "Beginner to Intermediate",
        topics: ["Tables & Records", "SELECT Queries", "Joins", "Aggregate Functions", "Database Design"]
      },
      "Machine Learning": {
        description: "Understand the fundamentals of Machine Learning and how to create predictive models.",
        duration: "10 Weeks",
        level: "Advanced",
        topics: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Neural Networks"]
      },
      "Cyber Security": {
        description: "Learn the principles of cybersecurity and protect systems from attacks.",
        duration: "7 Weeks",
        level: "Intermediate",
        topics: ["Encryption", "Network Security", "Firewalls", "Threat Analysis", "Ethical Hacking"]
      }
    };

    function openDialog(course) {
      let details = courses[course];
      courseTitle.textContent = course;
      courseDetails.innerHTML = `
        <p><strong>Description:</strong> ${details.description}</p>
        <p><strong>Duration:</strong> ${details.duration}</p>
        <p><strong>Level:</strong> ${details.level}</p>
        <p><strong>Key Topics:</strong></p>
        <ul>
          ${details.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
      `;
      dialog.showModal();
    }

    function closeDialog() {
      dialog.close();
    }

    function enrollCourse() {
      alert("✅ You have enrolled in " + courseTitle.textContent + "!");
      dialog.close();
    }