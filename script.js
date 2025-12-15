const alarms = document.getElementById("alarm");

// -------------------- MODAL --------------------
function showModal() {
  document.getElementById("myModal").style.display = "flex";
  const amongopen = document.getElementById("Open");
  amongopen.currentTime = 0;
  amongopen.play();
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
  const amongclose = document.getElementById("Close");
  amongclose.currentTime = 0;
  amongclose.play();
}

// -------------------- GAME STATE --------------------
let pinIndex = 1;
let enteredPin = "";
let locked = false;

let round = 1;
const totalRounds = 3;

let currentCode = "";

// grab all note images (the required code display)
const notes = document.querySelectorAll(".note");

// -------------------- INIT --------------------
generateNewCode();

// -------------------- CODE GENERATION --------------------
function generateNewCode() {
  currentCode = "";

  for (let i = 0; i < 5; i++) {
    currentCode += Math.floor(Math.random() * 10);
  }

  displayNotes();
  clearPin();
  locked = false;

  console.log(`Round ${round} code:`, currentCode); // for testing
}

// -------------------- DISPLAY NOTES --------------------
function displayNotes() {
  for (let i = 0; i < 5; i++) {
    notes[i].src = `images/${currentCode[i]}-Notes.png`;
  }
}

// -------------------- KEYPAD INPUT --------------------
function pressKey(num) {
  playPress();
  if (locked) return;
  if (pinIndex > 5) return;

  const slot = document.getElementById(`pinslot${pinIndex}`);
  slot.src = `images/${num}-Pincode.png`;

  enteredPin += num;
  pinIndex++;
}

// -------------------- CHECK BUTTON --------------------
function keyCheck() {
  if (enteredPin.length < 5) return;

  if (enteredPin === currentCode) {
    // ✅ correct
    round++;

    if (round > totalRounds) {
      success();
    } else {
      generateNewCode();
      playCorrect();
    }
  } else {
    playError();

    // ❌ wrong
    locked = true;

    for (let i = 1; i <= 5; i++) {
      document
        .getElementById(`pinslot${i}`)
        .parentElement.classList.add("red", "translucent");
    }
  }
}

// -------------------- X (RESET) --------------------
function keyX() {
  playError();

  for (let i = 1; i <= 5; i++) {
    document
      .getElementById(`pinslot${i}`)
      .parentElement.classList.remove("red", "translucent");
  }

  clearPin();
  locked = false;
}

// -------------------- CLEAR INPUT --------------------
function clearPin() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`pinslot${i}`).src = "";
  }

  pinIndex = 1;
  enteredPin = "";
}

// -------------------- SUCCESS --------------------
function success() {
  if (alarms) alarms.pause();
  alarms.currentTime = 0;

  console.log("ALL ROUNDS COMPLETE ✅");
  // Example success behavior:
  hideModal();

  setTimeout(() => {
    document.getElementById("TaskComplete").style.display = "flex";
    playCorrect();
    const typing = document.getElementById("Typing");
    typing.currentTime = 0;
    typing.play();
  }, 1000);

  setTimeout(() => {
    document.getElementById("TaskComplete").style.display = "none";
  }, 2500);
  //
  //
  //
  //
  //
  //
  //
  setTimeout(() => {
    document.getElementById("GotoCafeteria").style.display = "flex";
    const typing = document.getElementById("Typing");
    typing.currentTime = 0;
    typing.play();
  }, 4000);

  setTimeout(() => {
    document.getElementById("GotoCafeteria").style.display = "none";
  }, 5500);
  //
  //
  //
  //
  //
  //
  //
  setTimeout(() => {
    document.getElementById("EscapeText").style.display = "flex";
    const typing = document.getElementById("Typing");
    typing.currentTime = 0;
    typing.play();
  }, 6500);

  setTimeout(() => {
    document.getElementById("EscapeText").style.display = "none";
  }, 8500);
  //
  //
  //
  //
  //
  //
  //
  // You can add:
  // - door animation
  // - sound
  // - scene change
}
function playError() {
  const errorSound = document.getElementById("Error");
  errorSound.currentTime = 0;
  errorSound.play();
}
function playCorrect() {
  const correctSound = document.getElementById("Correct");
  correctSound.currentTime = 0;
  correctSound.play();
}
function playPress() {
  const pressSound = document.getElementById("Press");
  pressSound.currentTime = 0;
  pressSound.play();
}
window.onload = () => {
  const ambient = document.getElementById("Ambient");
  ambient.volume = 0.4;
  ambient.loop = true;
  ambient.play().catch(() => {
    document.addEventListener("click", () => ambient.play());
  });
};

function showMap() {
  const mapModal = document.getElementById("myMap");
  const mapBody = document.querySelector(".modal-body-map");

  if (mapModal.style.display === "flex") {
    mapModal.style.display = "none";
    mapBody.style.display = "none";

    const amongclose = document.getElementById("Close");
    amongclose.currentTime = 0;
    amongclose.play();
  } else {
    mapModal.style.display = "flex";
    mapBody.style.display = "flex";
    const amongopen = document.getElementById("Open");
    amongopen.currentTime = 0;
    amongopen.play();
  }
}

function goCafeteria() {
  window.location.href = "https://wh5k5m.csb.app/";
}
