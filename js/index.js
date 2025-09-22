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
  fetch("./pages/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data)
    .catch(err => console.error("Footer load error:", err));
});

// image slider
let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let imgSlider = document.querySelector(".img-slider");
let listItem = document.querySelector(".img-slider .list");
let thumbnail = document.querySelector(".thumbnail");

let timeRunning = 3000;
let timeAutoNext = 7000;

let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

nextBtn.onclick = function () {
  showSlider("next");
};
preBtn.onclick = function () {
  showSlider("pre");
};

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".img-slider .list .item");
  let itemThumbnail = document.querySelectorAll(".thumbnail .item");

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    imgSlider.classList.add("next");
  } else {
    listItem.prepend(itemSlider[itemSlider.length - 1]);
    thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1]);
    imgSlider.classList.add("pre");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    imgSlider.classList.remove("next");
    imgSlider.classList.remove("pre");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}


// scholership Numbers
document.addEventListener("DOMContentLoaded",()=>{
   const nums =document.querySelectorAll(".start");

nums.forEach(num=>{
    let target=+num.getAttribute("data-target");
    let count=0;
    
let increment=Math.ceil(target/200);
let interval=setInterval(() => {
  count+=increment;
  if(count>=target){
    count=target;
    clearInterval(interval);
  }
  num.innerText=count.toLocaleString()+"+";
}, 80);
});
});