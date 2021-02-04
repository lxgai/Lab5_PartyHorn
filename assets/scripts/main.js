


const airhorn = new Audio("https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/air-horn.mp3");
const carhorn = new Audio("https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/car-horn.mp3"); 
const partyhorn = new Audio("https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/audio/party-horn.mp3");


function changeVol(vol) {
  vlme = vol * 0.01;
  airhorn.volume = vlme;
  carhorn.volume = vlme;
  partyhorn.volume = vlme;
}

// change volume from text input field
document.getElementById("volume-number").addEventListener("input", function () {
  document.getElementById("volume-slider").value = this.value;
  changeVol(this.value);
  
  if (this.value == 0) {
    document.getElementById("honk-btn").disabled = true; 
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-0.svg";
  }
  else if ( (this.value >= 1) && (this.value <= 33) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-1.svg";
  }
  else if ( (this.value >= 34) && (this.value <= 66) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-2.svg";
  }
  else if ( (this.value >= 67) && (this.value <= 100) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-3.svg";
  }
  
});

// change volume from slider
document.getElementById("volume-slider").addEventListener("input", function () {
  document.getElementById("volume-number").value = this.value;
  changeVol(this.value);
  
  if (this.value == 0) {
    document.getElementById("honk-btn").disabled = true; 
    document.getElementById("volume-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-0.svg";
  }
  else if ( (this.value >= 1) && (this.value <= 33) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("volume-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-1.svg";
  }
  else if ( (this.value >= 34) && (this.value <= 66) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("volume-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-2.svg";
  }
  else if ( (this.value >= 67) && (this.value <= 100) ) {
    document.getElementById("honk-btn").disabled = false;
    document.getElementById("volume-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/icons/volume-level-3.svg";
  }
});

// change image
document.getElementById("radio-air-horn").addEventListener("input", function() {
  if (document.getElementById("radio-air-horn").checked) {
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/images/air-horn.svg";
  }

});
document.getElementById("radio-car-horn").addEventListener("input", function() {
  if (document.getElementById("radio-car-horn").checked) {
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/images/car.svg";
  }

});

document.getElementById("radio-party-horn").addEventListener("input", function() {
  if (document.getElementById("radio-party-horn").checked) {
    document.getElementById("sound-image").src = "https://raw.githubusercontent.com/lxgai/Lab5_PartyHorn/master/assets/media/images/party-horn.svg";
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
  


