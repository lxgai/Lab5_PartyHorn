


const airhorn = new Audio("/assets/media/audio/air-horn.mp3");
const carhorn = new Audio("/assets/media/audio/car-horn.mp3"); 
const partyhorn = new Audio("/assets/media/audio/party-horn.mp3");


function changeVol(vol) {
  airhorn.volume = vol;
  carhorn.volume = vol;
  partyhorn.volume = vol;
}

// change volume from text input field
document.getElementByID("volume-number").addEventListener("change", function () {
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
document.getElementByID("volume-slider").addEventListener("change", function () {
  document.getElementById("volume-number").value = this.value;
  changeVol(this.value);
  
  if (this.value == 0) {
    document.getElementById("honk-btn").disabled = true; 
  }
  else {
    document.getElementById("honk-btn").disabled = false;
  }
});



// hitting "honk" button
document.getElementById("honk-btn").addEventListener("click", function (event) {
  event.preventDefault();

  // see which one to play
  if (document.getElementById("radio-air-horn").checked) {
    airhorn.play();
  }
  else if (document.getElementById("radio-car-horn").checked) {
    carhorn.play();
  }
  else {
    partyhorn.play();
  }
});
  


