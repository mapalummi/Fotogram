let images = [
  "img/wald1.jpg",
  "img/wald2.jpg",
  "img/wald3.jpg",
  "img/wald4.jpg",
  "img/wald5.jpg",
  "img/wald6.jpg",
  "img/wald7.jpg",
  "img/wald8.jpg",
  "img/wald9.jpg",
  "img/wald10.jpg",
  "img/wald11.jpg",
  "img/wald12.jpg",
];

function renderImages() {
  let contentRef = document.getElementById("content");
  for (let i = 0; i < images.length; i++) {
    contentRef.innerHTML += getImages(i);
  }
}

function fullSizeImages(i) {
  let imgRef = document.getElementById("img_dialog");
  imgRef.innerHTML = getFullSizeImage(i);

  if (i <= 0) {
    document.getElementById("d_left_button").classList.add("d_none");
  }

  if (i >= 11) {
    document.getElementById("d_right_button").classList.add("d_none");
  }

  document.getElementById("img_dialog").classList.remove("d_none");
  document.getElementById("body_overlay").classList.remove("d_none");
}

function closeDialog() {
  document.getElementById("img_dialog").classList.add("d_none");
  document.getElementById("body_overlay").classList.add("d_none");
}

function leftButtonClick(i) {
  let leftButtonRef = document.getElementById("img_dialog");
  leftButtonRef.innerHTML = leftButton(i)

  if (i <= 1) {
    document.getElementById("d_left_button").classList.add("d_none");
  }
}

function rightButtonClick(i) {
  let rightButtonRef = document.getElementById("img_dialog");
  rightButtonRef.innerHTML = rightButton(i);

  if (i >= 11) {
    document.getElementById("d_right_button").classList.add("d_none");
  }
}