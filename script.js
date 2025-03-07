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

function getImages(i){
  return `<img onclick="fullSizeImages(${i})" src="img/wald${i + 1}.jpg" class="images" alt="">`;
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

function getFullSizeImage(i){
  return `
  <img src="img/wald${i + 1}.jpg" class="full_images" alt="">
  <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
        <img src="./img/icon-löschen.svg" alt=""></a>
        <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i + 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i + 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <i class="img_count">${i+1}/12</i>
  `;
}


function closeDialog() {
  document.getElementById("img_dialog").classList.add("d_none");
  document.getElementById("body_overlay").classList.add("d_none");
}


function leftButtonClick(i) {
  let leftButtonRef = document.getElementById("img_dialog");
  leftButtonRef.innerHTML = leftButton(i)

  if (i <= 2) {
    document.getElementById("d_left_button").classList.add("d_none");
  }
}

function leftButton(i){
  return `
  <img src="img/wald${i - 1}.jpg" class="full_images" alt="">
  <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
        <img src="./img/icon-löschen.svg" width="32px" height="32px" alt=""></a>
        <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i - 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i + 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <i class="img_count">${i}/12</i>
        `;
}


function rightButtonClick(i) {
  let rightButtonRef = document.getElementById("img_dialog");
  rightButtonRef.innerHTML = rightButton(i);

  if (i >= 11) {
    document.getElementById("d_right_button").classList.add("d_none");
  }
}

function rightButton(i){
  return `
  <img src="img/wald${i + 1}.jpg" class="full_images" alt="">
  <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
        <img src="./img/icon-löschen.svg" width="32px" height="32px" alt=""></a>
        <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i - 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i + 1})">
        <img src="./img/icon-pfeil.png" alt=""></a>
        <i class="img_count">${i}/12</i>
        `;
}
