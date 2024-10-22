let myAudio = document.getElementById("myAudio");
let songNameElement = document.getElementById("songName");

// เมื่อกดปุ่ม Play/Pause
myAudio.addEventListener('play', updateSongName);
myAudio.addEventListener('pause', updateSongName);

function updateSongName() {
    if (myAudio.paused) {
        songNameElement.innerHTML = "";
    } else {
        songNameElement.innerHTML = "เพลง: Your Song"; // แก้ชื่อเพลงตรงนี้
    }
}

  