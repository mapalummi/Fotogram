// Übungen zum for-loop:

function ticketCounter(){
  for (let i = 1; i < 11; i++) {
    console.log(`Das Ticket mit der Nummer ${i} wurde verkauft`);
  }
}

function sandwichCounter(){
  for (let i = 8; i > 0; i--) {
    console.log(`Ein Sandwich wurde verkauft. Es sind noch ${i-1} übrig`);
  }
}


let cart = []

function addProduct(){
  cart.push("Hundekorb", "Taschenlampe", "Headset", "Bettwäsche");
  console.log(cart);
}


function productCounter(){
  for (let counter = 0; counter < cart.length; counter++) {
    console.log(`Es wurden ${counter} Produkte in den Warenkorb gelegt`);
  }
}


function fiveTillNine(){
  for (let i = 5; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    } 
  }
}
