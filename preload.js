console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/0-Keypad.png",
  "images/0-Notes.png",
  "images/0-Pincode.png",
  "images/1-Keypad.png",
  "images/1-Notes.png",
  "images/1-Pincode.png",
  "images/2-Keypad.png",
  "images/2-Notes.png",
  "images/2-Pincode.png",
  "images/3-Keypad.png",
  "images/3-Notes.png",
  "images/3-Pincode.png",
  "images/4-Keypad.png",
  "images/4-Notes.png",
  "images/4-Pincode.png",
  "images/5-Keypad.png",
  "images/5-Notes.png",
  "images/5-Pincode.png",
  "images/6-Keypad.png",
  "images/6-Notes.png",
  "images/6-Pincode.png",
  "images/7-Keypad.png",
  "images/7-Notes.png",
  "images/7-Pincode.png",
  "images/8-Keypad.png",
  "images/8-Notes.png",
  "images/8-Pincode.png",
  "images/9-Keypad.png",
  "images/9-Notes.png",
  "images/9-Pincode.png",
  "images/Check-Keypad.png",
  "images/exit-button.png",
  "images/Map-Button.png",
  "images/map.png",
  "images/minipad.png",
  "images/Oxygen-Keyboard-Final.png",
  "images/Oxygen-Room.png",
  "images/X-Keypad.png",

  "sounds/Among-Close.mp3",
  "sounds/Among-Correct.mp3",
  "sounds/Among-Error.mp3",
  "sounds/Among-Open.mp3",
  "sounds/Among-Press.mp3",
  "sounds/Among-Us-Ambient.mp3",
  "sounds/Among-Alarm.mp3"
);
