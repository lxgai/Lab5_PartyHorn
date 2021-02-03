//document.onload = function ...


const horns = [];
const airhorn = new Audio(https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/air-horn.mp3);
// airhorn.play();
horns.push(airhorn);

const carhorn = new Audio(https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/car-horn.mp3);
horns.push(carhorn);   

const carhorn = new Audio(https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/party-horn.mp3);
horns.push(partyhorn);   

let currHorn = horns[0];

function changeVol(vol) {
  for (let horn of horns){
    horn.volume = vol;
  }
}

// change volume from text input field
document.getElementByID("volume-number").addEventListener("change", function (n) {
  document.getElementById("volume-slider").value = this.value;
  changeVol(this.value);
  
  if (this.value == 0) {
    document.getElementById("honk-btn").disabled = true; 
  }
  else {
    document.getElementById("honk-btn").disabled = false;
  }
});

// change volume from slider
document.getElementByID("volume-slider").addEventListener("change", function (s) {
  document.getElementById("volume-number").value = this.value;
  changeVol(this.value);
  
  if (this.value == 0) {
    document.getElementById("honk-btn").disabled = true; 
  }
  else {
    document.getElementById("honk-btn").disabled = false;
  }
});

// change in air horn button
document.getElementByID("radio-air-horn").addEventListener("change", function (a) {
  if (document.getElementById("radio-air-horn").checked) {
    currHorn = horns[0];
  }
});

// change in car horn button
document.getElementByID("radio-car-horn").addEventListener("change", function (c) {
  if (document.getElementById("radio-car-horn").checked) {
    currHorn = horns[1];
  }
});

// change in car horn button
document.getElementByID("radio-party-horn").addEventListener("change", function (p) {
  if (document.getElementById("radio-party-horn").checked) {
    currHorn = horns[2];
  }
});



document.getElementById("honk-btn").addEventListener("click", function (h) {
  currHorn.play();
});
  



