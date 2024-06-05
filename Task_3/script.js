// Select all the elements in the HTML page
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Define the list of tracks

let track_list = [
  {
    name: "Marvel Anthem",
    artist: "A.R.Rahman",
    image: "maxresdefault.jpg",
    url: "Marvel Anthem.mp3"
  },
  {
    name: "Track 2",
    artist: "Artist 2",
    url: "Unakka-Munthiri(PaglaSongs).mp3"
  }
];

// Define the current track index
let track_index = 0;

// Define the playback status
let isPlaying = false;

// Create the audio element for the player
let curr_track = document.createElement('audio');
curr_track.src = track_list[track_index].url;
curr_track.play();

playpause_btn.addEventListener("click", function() {
  if (isPlaying) {
    curr_track.pause();
    isPlaying = false;
  } else {
    curr_track.play();
    isPlaying = true;
  }
});

// Implement seeking functionality
seek_slider.addEventListener("input", function() {
  let seek_time = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seek_time;
});

volume_slider.addEventListener("input", function() {
  curr_track.volume = volume_slider.value / 100;
});