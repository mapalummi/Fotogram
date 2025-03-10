function getImages(i){
    return `<img onclick="fullSizeImages(${i})" src="img/wald${i + 1}.jpg" class="images" alt="">`;
  }

function getFullSizeImage(i){
    return `
    <img src="img/wald${i+1}.jpg" class="full_images" alt="">
    <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
          <img src="./img/icon-löschen.svg" alt=""></a>
          <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i+1})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <i class="img_count">${i+1}/12</i>
    `;
  }

  function leftButton(i){
    return `
    <img src="img/wald${i}.jpg" class="full_images" alt="">
    <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
          <img src="./img/icon-löschen.svg" width="32px" height="32px" alt=""></a>
          <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i-1})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <i class="img_count">${i}/12</i>
          `;
  }

  function rightButton(i){
    return `
    <img src="img/wald${i+1}.jpg" class="full_images" alt="">
    <a href="#" role="button" id="d_close_button" class="dialog_close_button" onclick="closeDialog()">
          <img src="./img/icon-löschen.svg" width="32px" height="32px" alt=""></a>
          <a href="#" role="button" id="d_left_button" class="dialog_left_button" onclick="leftButtonClick(${i})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <a href="#" role="button" id="d_right_button" class="dialog_right_button" onclick="rightButtonClick(${i+1})">
          <img src="./img/icon-pfeil.png" alt=""></a>
          <i class="img_count">${i+1}/12</i>
          `;
  }