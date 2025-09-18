function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hideSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="none";
}

// image slider
let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let animal = document.querySelector(".animal");
let listItem = document.querySelector(".animal .list");
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
  let itemSlider = document.querySelectorAll(".animal .list .item");
  let itemThumbnail = document.querySelectorAll(".thumbnail .item");

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    animal.classList.add("next");
  } else {
    listItem.prepend(itemSlider[itemSlider.length - 1]);
    thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1]);
    animal.classList.add("pre");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    animal.classList.remove("next");
    animal.classList.remove("pre");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}
